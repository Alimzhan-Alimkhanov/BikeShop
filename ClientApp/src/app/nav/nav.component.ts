import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from '../_services/authservices.service';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(private authServie: AuthService) { }

  ngOnInit() {
    
  }

  login() {
    this.authServie.login(this.model).subscribe(next =>
      {
        console.log('Logged in succes');
      },error =>
      {
        console.log('Logged in NotSucces');  
      })
  }

  loggedIn()
 {
   const token = localStorage.getItem('token');
    return !!token; 
    //exsict - true , нету- false 
 }

 logout(){
   localStorage.removeItem('token');
   console.log("LogOut");
 }

}
