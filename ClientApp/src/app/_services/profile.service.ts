import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private http: HttpClient) { }


    
   
    getprofile()
    {
      this.http.get(environment.apiUrl+"profile").subscribe(
          (resp)=>{

            console.log(resp);
          },error=>{
            console.log(error);
          }

      );
    
    }
  

}
