import { Injectable } from '@angular/core';
import { quote} from '../models/home-model';

import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor( ) { }
  //
  formData : quote;
  
  
     addQuote(qts:quote){
      // return this.http.get<quote[]>(this.APIUrl + '/quotes')
      alert(quote);
      
     }
}
