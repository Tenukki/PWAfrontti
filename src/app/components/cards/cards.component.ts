import { Component, OnInit } from '@angular/core';
import {CardServiceService} from "../../config/card-service.service";
import { CardStorageService } from '../../config/card-storage.service';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  
  constructor(public cardStorage:CardStorageService) { }

  ngOnInit() {
    this.cardStorage.getAll()
  }

  

}
