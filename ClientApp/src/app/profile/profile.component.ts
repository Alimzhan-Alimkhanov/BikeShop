import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { ProfileService } from '../_services/profile.service';
import { User } from '../_model/User';
import { User_Photo } from '../_model/User_Photo';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private alertify: AlertifyService,private profile:ProfileService) { }

  User: User;
  User_Photo: User_Photo ;

  ngOnInit() {

    this.profile.getprofile().subscribe(

      (responce:User) => {
        this.User = responce;
      },(error)=>
      {
         this.alertify.error(error);
      }
    );

    this.profile.getavatar().subscribe(
      (responce: User_Photo) => {
        this.User_Photo = responce;
        console.log(this.User_Photo);
      },(error)=>
      {
         this.alertify.error(error);
      }
    );

  }

 

  click()
  {
   
  }

}
