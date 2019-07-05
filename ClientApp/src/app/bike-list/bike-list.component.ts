import { Component, OnInit } from '@angular/core';
import { BikeService } from '../_services/bike.service';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { Bike } from '../_model/Bike';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {

  baseUrl = environment.apiUrl + 'bike/GetBike'
  constructor(private bike_service: BikeService,private http: HttpClient,private alertify: AlertifyService) { }


   BikeList : Bike;
  
   bike_man_array = [
     "BMW",
     "Harley-Davidson",
     "Kawasaki"
   ];
    


  ngOnInit() {
    // this.bike_service.getBikeList().subscribe((responce:Bike)=>{
    //     this.BikeList = responce;
    //  },error =>{
    //     this.alertify.error("Сервер не отвечаеть (Не можеть получить список мото-в)");
    //  });
     this.selectionManufacture("BMW");
  }

  onSelected(bike: Bike)
  {
    this.alertify.message(bike.id.toString());
  }

  selectionManufacture(man: string){
      this.bike_service.getBikeManList(man).subscribe((responce:Bike)=>{
        this.BikeList = responce;
     },error =>{
        this.alertify.error("Сервер не отвечаеть (Не можеть получить список мото-в)");
     });
   };

}
