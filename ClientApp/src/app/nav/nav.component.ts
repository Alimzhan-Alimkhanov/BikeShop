 import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from '../_services/authservices.service';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(private authServie: AuthService,private alertify: AlertifyService) { }

  ngOnInit() {
    
  }

  login() {
    this.authServie.login(this.model).subscribe(next =>
      {
        this.alertify.success('Logged in successfully');
      },error =>
      {
        this.alertify.success(error);
      })
  }

  loggedIn()
 {
  // console.log("loggedIn work")
   const token = localStorage.getItem('token');
    return !!token; 
    //exsict - true , нету- false 
 }

 logout(){
   localStorage.removeItem('token');
   this.alertify.message("logged out");
 }

}
