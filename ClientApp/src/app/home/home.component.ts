import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


   registerMode  = false;
   values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getValues();
  }

  registerToggle(){
    this.registerMode = true;
  }

  getValues(){
    this.http.get("https://localhost:5001/api/home/data").subscribe(responce=> {
     this.values = responce;
     console.log(responce);
    },
     error=>{
        console.log(error)
     });

  }

  cancelRegisterMode(registerMode: boolean)
  {
    this.registerMode = registerMode;
  }


    //*ngFor="let item of values", {{item.username bla bla }}



  

}
