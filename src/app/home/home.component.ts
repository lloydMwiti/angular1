import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HomeService } from '../services/home.service';
import { QuoteModel } from '../models/QuoteModel';
import { isNgTemplate } from '@angular/compiler';
import { element } from 'protractor';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  i :number= 1;
  
  todayDate : Date =new Date();
  createDate : Date;
  upvoteCount :number 
  downvoteCount : number 
  constructor(public service:HomeService) { 

  }

  lorem = " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatem repudiandae commodi dignissimos ducimus culpa et, molesti ";
 public  posts=[
    {'id':0,'quote' : this.lorem , 'author' : 'brian' , 'name' : 'joan' , 'date' : this.todayDate,'upvoteCount':0,'dislikeCount':0},
    {'id':1,'quote' : this.lorem , 'author' : 'tony' , 'name' : 'grishon',  'date' : this.todayDate,'upvoteCount':0,'dislikeCount':0},
   
  ];
  
  resetFrom(form?:NgForm){
    if(form!=null)
    form.resetForm();

    this.service.formData={
      Qoute:'',
      Author:'',
      Name:''

    }

  }
  logValue(value1,value2,value3){
    let ii :number =2;
    console.log(this.i);
    
    this.posts.push({id:ii++, quote : value1, author : value2 , name : value3 , date : new Date(),upvoteCount:0 ,dislikeCount: 0})
    this.resetFrom();
    alert('submited! scroll down to see your post');
    
  }
  onSubmit(){    
  }
  ngOnInit(): void {
    this.resetFrom();
  }
  upvote(usrId){
    let us= usrId*1;
    this.posts[us].upvoteCount +=1;
      console.log(this.posts[us]);
    
    
  }
  dislike(usrId){
    let us= usrId*1;
    this.posts[us].dislikeCount +=1;
      console.log(this.posts[us]);

  }

  removeQuote(usrId) {
    let us= usrId*1;
    this.posts.splice(us, 1);
  }
}
