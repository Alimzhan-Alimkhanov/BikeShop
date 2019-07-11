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
  list_bike_find_url = environment.apiUrl + "bike/Find";
   

  constructor(private http: HttpClient) { }


  getBikeList()
  {
    return this.http.get(this.baseUrl);
  }

  getBikeManList(man: string)
  {
    return this.http.get(this.bike_mans_url+man);
  }
  
  getFindBikeList(srch: string,cost: number,city : string,country: string,en_cap: number,kind:string,manufacture:string)
  {
        
        return this.http.get(this.list_bike_find_url+"?srch="+srch+"&cost="+cost+"&city="+city+"&country="+country
        +"&en_cap="+en_cap+"&kind="+kind+"&manufacture="+manufacture);
  }



}
