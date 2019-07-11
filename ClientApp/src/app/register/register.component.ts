import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {



  //EventEmittre - событие 
  @Output() cancelRegister = new EventEmitter();

   model: any = {};

   constructor(private authServie: AuthService,private alertify: AlertifyService,private routers: Router) { }

  ngOnInit() {
  }


  register()
  {
    this.authServie.register(this.model).subscribe((success) => {
      this.alertify.success("Вы зарегистрированы");
      this.routers.navigate(['/bikelist']);
    },error =>{
      this.alertify.error(error);
    });

  }
  
  cancel(){
    this.cancelRegister.emit(false);
    console.log("cancel");
  }
  

}
