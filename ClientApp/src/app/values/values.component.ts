import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-values',
  templateUrl: './values.component.html',
  styleUrls: ['./values.component.css']
})
export class ValuesComponent implements OnInit {

  values: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getvlues();
  }

  getvlues(){
    this.http.get("https://localhost:44369/api/home/data").subscribe(responce=> {
     this.values = responce;},
     error=>{
        console.log(error)
     });

  }

}
