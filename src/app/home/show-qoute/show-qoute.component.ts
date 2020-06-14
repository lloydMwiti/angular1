import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-show-qoute',
  templateUrl: './show-qoute.component.html',
  styleUrls: ['./show-qoute.component.css']
})
export class ShowQouteComponent implements OnInit {
  lorem = "lorem ipsum dolor sit amet ";

  constructor() { }
  
  public posts=[
    {'quote' : this.lorem , 'author' : 'brian' , 'name' : 'joan'},
    {'quote' : this.lorem , 'author' : 'tony' , 'name' : 'grishon'},
    {'quote' : this.lorem , 'author' : 'boyd' , 'name' : 'mary'},
    {'quote' : this.lorem , 'author' : 'henry' , 'name' : 'julian'},
    {'quote' : this.lorem , 'author' : 'john' , 'name' : 'joyce'},
  ];
  

  ngOnInit(): void {
  
  }

}
