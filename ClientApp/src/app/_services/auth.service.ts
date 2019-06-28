import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {map} from 'rxjs/operators'

//функия (декортарто) который добавляет настройки для классса
//без Inhectable сервис не будеть доступен 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  baseUrl = environment.apiUrl + 'auth/'

constructor(private http: HttpClient) { }


 login(model: any)
 {
    return this.http.post(this.baseUrl + 'login',model).pipe(
      map((responce: any) => {
          const responseUser = responce;
          if(responseUser)
          {
            localStorage.setItem('token',responseUser.token);
          }
      })
    );

 }


}
