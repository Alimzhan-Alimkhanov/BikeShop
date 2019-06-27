import { Component } from '@angular/core';

export interface Cycle {
  id: number
  model: string
  exist: boolean
  date?: any
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'BikeShop';


  public cycles: Cycle[] =
    [
      { id: 0, model: "Honda Cbr", exist: true,date: new Date() },
      { id: 1, model: "Harley", exist: false, date: new Date() },
      { id: 2, model: "Yamaha", exist: true, date: new Date() },
    ]
}

//интерполяция
