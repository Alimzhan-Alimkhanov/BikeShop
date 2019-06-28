import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {Routes,RouterModule} from '@angular/router'
import { Main_serviceService } from './main_service.service';

import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ValuesComponent } from './values/values.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { NewsComponent } from './news/news.component';
import { NotComponent } from './Not/Not.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';



const appRoutes: Routes = [
   {path: '' , component: MainpageComponent},
   {path: 'about' , component: AboutComponent},
   {path: 'news' , component: NewsComponent},
   {path: '**' , component: NotComponent}
]

@NgModule({
   declarations: [
      AppComponent,
      MainpageComponent,
      ValuesComponent,
      NavComponent,
      AboutComponent,
      NewsComponent,
      NotComponent,
      HomeComponent,
      RegisterComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      Main_serviceService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
