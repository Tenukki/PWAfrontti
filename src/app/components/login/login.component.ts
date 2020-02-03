import { Component, OnInit } from '@angular/core';
import {CardStorageService} from "../../config/card-storage.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username
  password
  logState
  user

  constructor(public cardStorage: CardStorageService) { }

  ngOnInit() {
    if(this.cardStorage.userData == null){
      this.logState = true
    }else{
      this.user = this.cardStorage.userData
      this.logState = false
    }
  }

  login(){
    this.cardStorage.loginAndSaveUser({username: this.username, password: this.password})
    this.logState = false
  }
  
  logOut(){
    this.cardStorage.logOutAndDelete()
    this.logState = true
  }

}
