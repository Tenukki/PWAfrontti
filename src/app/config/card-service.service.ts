import { Injectable } from '@angular/core';
import {ICard} from "../models/card"
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardServiceService {

  constructor(private http: HttpClient) { }

  configUrl = 'https://pwa22.herokuapp.com/api/infos';

  public getAll() {
    return this.http.get(this.configUrl);
  }

  public newCard(body) {
    return this.http.post(this.configUrl,body);
  }
}
