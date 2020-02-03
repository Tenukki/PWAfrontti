import { Component, OnInit, Input } from '@angular/core';
import { CardServiceService } from 'src/app/config/card-service.service';
import { CardStorageService } from 'src/app/config/card-storage.service';

@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.css']
})
export class EditFormComponent implements OnInit {

  @Input()
  jsonData: any;

  newTitle
  newText
  loader:boolean = true

  constructor(public cardService: CardServiceService, public cardStorage: CardStorageService) { }

  ngOnInit() {
    console.log(this.jsonData)
    this.newTitle = this.jsonData.title
    this.newText = this.jsonData.text
  }

  updateCard(id){
    this.loader = false
    this.cardService.updateCard(id,{title: this.newTitle, text: this.newText}).subscribe((data) =>{
      console.log(data)
      let bol = this.cardStorage.getAll()
      this.loader = bol
    })
    
    
  }

}
