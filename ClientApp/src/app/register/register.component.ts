import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  //в input - можно использоваться геттер и сеттеры для валидаци
  @Input()valuesFromHome: any;
  //EventEmittre - событие 
  @Output() cancelRegister = new EventEmitter();

   model: any = {};

   constructor(private authServie: AuthService,private alertify: AlertifyService) { }

  ngOnInit() {
  }


  register()
  {
    this.authServie.register(this.model).subscribe((success) => {
      this.alertify.success("regis-n success");
    },error =>{
      this.alertify.error(error);
    });

  }
  
  cancel(){
    this.cancelRegister.emit(false);
    console.log("cancel");
  }
  

}
