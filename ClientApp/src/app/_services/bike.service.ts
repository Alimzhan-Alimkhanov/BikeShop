import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators'
import { environment } from 'src/environments/environment';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  baseUrl = environment.apiUrl + 'bike/GetBike';

  constructor(private http: HttpClient) { }


  BikeList: any;


  getBikeList()
  {
    this.http.get(this.baseUrl).subscribe(responce=>{
      this.BikeList = responce;
     // console.log(
    },error =>{
      console.log()error
    });

    return this.BikeList;
  }

}
