import { Injectable } from '@angular/core';
import { quote} from '../models/home-model';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HomeService {
  constructor( private http:HttpClient ) { }
  //
  formData : quote;
  readonly APIUrl=" 192.168.100.11/api";
  
     addQuote(qts:quote){
      // return this.http.get<quote[]>(this.APIUrl + '/quotes')
      alert(quote);
      
     }
}
