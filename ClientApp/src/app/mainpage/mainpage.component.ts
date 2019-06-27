import { Component, OnInit, Input } from '@angular/core';
import { Cycle } from '../app.component';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {


  @Input() cycles: Cycle[] = []


  constructor() { }

  ngOnInit() {
  }

  onChange(id: number)
  {
      
  }

}   
