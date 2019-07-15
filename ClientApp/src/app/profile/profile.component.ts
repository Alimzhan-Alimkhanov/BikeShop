import { Component, OnInit } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';
import { ProfileService } from '../_services/profile.service';
import { User } from '../_model/User';
import { User_Photo } from '../_model/User_Photo';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private alertify: AlertifyService,private profile:ProfileService,private router: Router) { 


  }

  User_server: User;
  User_Photo: User_Photo ;

 genders = [
    {Id : 0, Name : "man"},
    {Id : 1, Name : "woman"}
  ];

  gender_selected: number;
   

  
  ngOnInit() {

    this.getuserprofile();

  }


  submit(name:string,genderid:number,age: number,number:string)
  {


    if((this.User_server.name.toString() !=  name) ||  
    (this.User_server.gender !=  this.genders[genderid].Name) ||
    (this.User_server.age !=  age) ||
    (this.User_server.telephone_number.toString() !=  number))
    {

      var user: User = new User(name,this.genders[genderid].Name,age,number);
      this.profile.editprofile(user).subscribe( (resp)=>{
        this.alertify.message("изменение сохраннены");
    
       },(error) =>{
         this.alertify.error("ошибка " +error);
       }
       )
    }
    else{
      this.alertify.message("ничего не изменено");
    }

   
  }

  getuserprofile()
  {

    this.profile.getprofile().subscribe(

      (responce:User) => {
        this.User_server = responce;
        this.gender_selected = this.genders.findIndex(n => n.Name == this.User_server.gender);
        
      },(error)=>
      {
         this.alertify.error(error);
      }
    );

    this.profile.getavatar().subscribe(
      (responce: User_Photo) => {
        
        if(responce==null)
        {
         let userphoto: User_Photo = new User_Photo("assets/img/user_img.jpg");
         this.User_Photo = userphoto;
        }else{

          this.User_Photo = responce;
          this.User_Photo.path = "https://localhost:5001/"+responce.path;
        }
      },(error)=>
      {
         this.alertify.error(error);
      }
    );


  }

  setgender()
  {

  
  }


}
