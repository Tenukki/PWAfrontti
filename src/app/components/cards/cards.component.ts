import { Component, OnInit } from '@angular/core';
import {CardServiceService} from "../../config/card-service.service";
import { CardStorageService } from '../../config/card-storage.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  show: boolean = true

  title
  text
  
  constructor(public cardStorage:CardStorageService, public cardservice: CardServiceService) { }

  ngOnInit() {
    this.cardStorage.getAll()
  }

  //Tämä toimii, muista lisät että poistaa myös back endistä
  deleteCard(data){
    console.log(data)
    this.cardservice.deleteCard(data.id).subscribe((data)=>{
      console.log(data)
    })
    let newCardList = this.cardStorage.currentData.filter((value) => value.id != data.id)
    this.cardStorage.setData(newCardList)
    
  }


  /*
  
<div class="container">
    <div *ngFor="let data of this.cardStorage.currentData.reverse()" class="center text-center">
        
        <label >Write title:</label>
        <input class="form-control form-control-lg" type="text"  [(ngModel)]="data.title">
        
        <label>Instructions for the code:</label>
        <textarea class="form-control form-control-lg" [(ngModel)]="data.text"></textarea>
       
        <button class="btn btn-success" (click)="postCard()">edit and post</button>
    </div>
</div>
*/

/*

<div  class="row itemsBlock">
        <div class="card col-md-4 col-sm-6 col-12" style="width: 18rem;" *ngFor="let data of this.cardStorage.currentData.reverse()">
            <div class="card-body">
            <input class="card-title">
            <textarea class="card-text" [(ngModel)]="text" >{{data.text}}</textarea>
            <button class="btn btn-warning right" (click)="deleteCard(data)">submit</button>
            <button class="btn btn-primary right"  (click)="show = !show">close</button>
            </div>
        </div>
    </div>
    */

  

}
