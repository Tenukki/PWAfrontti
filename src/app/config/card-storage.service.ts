import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CardServiceService } from './card-service.service';


@Injectable({
  providedIn: 'root'
})
export class CardStorageService {

  public currentData

  constructor(private cardServiceService: CardServiceService) { }


  getAll(): any {
    this.cardServiceService.getAll().subscribe(data =>{
      console.log(data)
      this.currentData = data
    })
    
  }

  getData(){
    return this.currentData;
  }

  setData(data){
    this.currentData = data
  }

}
