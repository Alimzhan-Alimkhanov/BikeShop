import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { AuthService } from '../_services/auth.service';


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

   constructor(private authServie: AuthService) { }

  ngOnInit() {
  }


  register()
  {
    this.authServie.register(this.model).subscribe((success) => {
      console.log("regis-n success");
    },error =>{
       console.log(error);
    });

  }
  
  cancel(){
    this.cancelRegister.emit(false);
    console.log("cancel");
  }
  

}
