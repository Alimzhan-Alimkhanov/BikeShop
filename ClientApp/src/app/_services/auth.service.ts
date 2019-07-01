import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators'
import {JwtHelperService} from '@auth0/angular-jwt';

//функия (декортарто) который добавляет настройки для классса
//без Inhectable сервис не будеть доступен 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  baseUrl = environment.apiUrl + 'auth/'
  jwtHelper = new JwtHelperService();
  decodeToken: any;

constructor(private http: HttpClient) { }


 login(model: any)
 {
    return this.http.post(this.baseUrl + 'login',model).pipe(
      map((responce: any) => {
          const responseUser = responce;
          if(responseUser)
          {
            localStorage.setItem('token',responseUser.token);
            //this.decodeToken = this.jwtHelper.decodeToken(responseUser.token);
            console.log(this.decodeToken);
          }
      })
    );

 }

 register(model: any)
 {
    return this.http.post(this.baseUrl + "register",model)
 }
 
 loggedIn()
 {
   const token = localStorage.getItem('token');
   
   //true - токен не рабочий , время истекло
   //false - токен рабочий , время не истекло
   return !this.jwtHelper.isTokenExpired(token);
 }



}
