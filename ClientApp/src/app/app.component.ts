import { Component } from '@angular/core';
import { Main_serviceService } from './main_service.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl:'./app.component.html',
  styleUrls: ['./app.component.css']
})

//export - 
export class AppComponent {
    
    username: string =""
    responce: any

    constructor(private http: HttpClient)
    {

    }

    search(){
      this.http.get('https://localhost:5001/api/home/' + this.username).subscribe((responce)=>
      {
        this.responce = responce,
        console.log(this.responce)
      })
    }
    
}

//интерполяция
