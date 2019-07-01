import { Component, OnInit,OnDestroy } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AuthService } from './_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})

//export - 
export class AppComponent implements OnInit {
    
    
    jwtHelper = new JwtHelperService();

    constructor(private authsService: AuthService)
    {

    }


    ngOnInit(){
    
      const token = localStorage.getItem('token');
      if(token){
         this.authsService.decodeToken = this.jwtHelper.decodeToken(token);
      }
    }

  

    


    
}

//интерполяция
