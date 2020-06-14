import { Component, OnInit } from '@angular/core';

import { quote } from '../models/home-model'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor() { }
  home = new quote()
  dataaray=[];
  changeText : string ="none" 

  ngOnInit(): void {
    this.dataaray.push(this.home);
  }

  emit(){
      this.changeText='someting you want'
      this.home= new quote;
      this.dataaray.push(this.home);
  }
}
