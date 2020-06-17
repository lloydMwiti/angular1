import { Injectable } from '@angular/core';
import { quote } from '../models/home-model';
import { QuoteModel } from '../models/QuoteModel';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  public quoteList: QuoteModel[] = [];

  private daysOfTheWeeks = ['Sun', 'Mon', 'Tue', 'Wed', 'Thurs', 'Fri', 'Sat'];
  constructor( ) { }
  //

  
  addNewQuote(quote: String) {
    const date = new Date();
    const dayOfTheWeek = this.daysOfTheWeeks[date.getDate()];
    const day = date.getDay();
    const year = date.getFullYear();
    this.quoteList.push(
      new QuoteModel(quote, `${dayOfTheWeek} ${day}, ${year}`)
    );
  }

  getQuote() {
    return this.quoteList;
  }

  removeQuote(index) {
    this.quoteList.splice(index, 1);
  }
  formData : quote;
  
  
     addQuote(qts:quote){
      // return this.http.get<quote[]>(this.APIUrl + '/quotes')
      alert(quote);
      
     }
}


