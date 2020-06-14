import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  upvoteCount:number = 0;
  dislikeCount:number = 0;


  constructor() { }

  ngOnInit(): void {
  }
  upvote(){
    this.upvoteCount +=1;
  }
  dislike(){
    this.dislikeCount +=1;
  }
}
