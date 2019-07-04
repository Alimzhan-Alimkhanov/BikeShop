import { Component, OnInit } from '@angular/core';
import { BikeService } from '../_services/bike.service';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-bike-list',
  templateUrl: './bike-list.component.html',
  styleUrls: ['./bike-list.component.css']
})
export class BikeListComponent implements OnInit {

  baseUrl = environment.apiUrl + 'bike/GetBike'
  constructor(private bike_service: BikeService,private http: HttpClient) { }


   BikeList : any;



  ngOnInit() {
    // this.BikeList = this.bike_service.getBike();
    //this.BikeList  = this.bike_service.getBike();
    //this.BikeList = this.bike_service.data;

    this.BikeList = this.bike_service.getBike();

    // return this.http.get(this.baseUrl).subscribe(responce=>{
    //   this.BikeList = responce;
    //   console.log(responce);
    // });
  }

}
