import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService]
})
export class AppComponent implements OnInit {
  title = 'my-app';
  register;

  constructor(private userService:UserService){

  }

  ngOnInit(){
    this.register={
      username:"sumi12",
      email:"sumi@gmail.com",
      password:"abc123456"

    }
  }

  registerUser(){
    console.log(this.register)
    this.userService.registerUser(this.register).subscribe(
      responce=>{ alert("User" + this.register.username + "has been created")},
      error=> console.log("error",error)
    )
  }
}
