import { Component, OnInit, OnChanges,EventEmitter, Output } from '@angular/core';
import {CardServiceService} from "../../config/card-service.service";
import { Config } from 'protractor';
import { CardStorageService } from 'src/app/config/card-storage.service';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.css']
})
export class FormViewComponent implements OnInit {
  title:string
  text:string

  constructor(private cardService: CardServiceService, private cardStorage: CardStorageService) { }

  postCard (){
    this.cardService.newCard({title: this.title, text: this.text}).subscribe(data =>{
      this.cardStorage.getAll()
    })
    
  }

  ngOnInit() {

  }

}
