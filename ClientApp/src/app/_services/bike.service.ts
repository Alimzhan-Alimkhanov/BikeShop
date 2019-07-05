import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Bike } from '../_model/Bike';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  baseUrl = environment.apiUrl + 'bike/GetBike';
  bike_mans_url = environment.apiUrl + 'bike/GetManBike/';

  constructor(private http: HttpClient) { }


  getBikeList()
  {
    return this.http.get(this.baseUrl);
  }

  getBikeManList(man: string)
  {
    console.log(this.bike_mans_url+man);
    return this.http.get(this.bike_mans_url+man);
  }

}
