import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ValuesComponent } from './values/values.component';

@NgModule({
   declarations: [
      AppComponent,
      MainpageComponent,
      ValuesComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
