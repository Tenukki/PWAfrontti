import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardServiceService } from './card-service.service';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CardStorageService {

  public currentData
  public userData = null

  constructor(private cardServiceService: CardServiceService
    ,private _router: Router
    ) { }

  loginAndSaveUser(bod){
    this.cardServiceService.login(bod).subscribe((aut)=>{
      console.log(aut)
      this.userData = aut
      console.log(this.userData)
      sessionStorage.setItem('token',this.userData.token)
      //this._router.navigate(["/form"])
    })
  }

  logOutAndDelete(){
    this.userData = null
    sessionStorage.clear()
  }


  getAll(): any {
    try {
      this.cardServiceService.getAll().subscribe((data) =>{
        console.log(data)
        this.currentData = data
        this.currentData.reverse()
      })
      return true
      
    } catch (error) {
      console.log(error)
      return false;
    }
    
    
  }

  getData(){
    return this.currentData;
  }

  setData(data){
    this.currentData = data
  }


}
