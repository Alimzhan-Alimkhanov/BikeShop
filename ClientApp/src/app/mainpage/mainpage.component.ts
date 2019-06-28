import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  template: `<h3>Главная</h3>`
})
export class MainpageComponent implements OnInit {

    
  message: string;

  items = ["ITEm1","Item2","Item3"]


  logged = false

   text: string = "Hellooo"
 
  
  Loggin(event){
    console.log(event)    
   }



  constructor() {
   }



  ngOnInit() {
  }


}
