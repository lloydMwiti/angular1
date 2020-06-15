import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HomeService } from 'src/app/services/home.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  upvoteCount:number = 0;
  dislikeCount:number = 0;
  todayDate : Date =new Date();
  createDate : Date;

  constructor(public service:HomeService) { 

  }

  lorem = " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus voluptatem repudiandae commodi dignissimos ducimus culpa et, molesti ";
 public  posts=[
    {'quote' : this.lorem , 'author' : 'brian' , 'name' : 'joan' , 'date' : this.todayDate,'upvoteCount':0,'dislikeCount':2},
    {'quote' : this.lorem , 'author' : 'tony' , 'name' : 'grishon',  'date' : this.todayDate,'upvoteCount':1,'dislikeCount':0},
   
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
    console.log(value1);
    console.log(value2);
    console.log(value3);

   
    this.posts.push({quote : value1, author : value2 , name : value3 , date : new Date(),upvoteCount: 0,dislikeCount:0})
    this.resetFrom();
    alert('submited! scroll down to see your post');
    
  }
  onSubmit(){    
  }
  ngOnInit(): void {
    this.resetFrom();
  }
  upvote(){
    
    this.upvoteCount +=1;
    this.dislikeCount =0;
  }
  dislike(){
    this.dislikeCount =1;
    this.upvoteCount =0;
  }
}
