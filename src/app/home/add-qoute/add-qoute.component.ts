import { Component, OnInit } from '@angular/core';
import { HomeService } from 'src/app/services/home.service';
import { NgForm } from '@angular/forms';
import { quote } from 'src/app/models/home-model';
import { posts } from '../../models/newArray'


@Component({
  selector: 'app-add-qoute',
  templateUrl: './add-qoute.component.html',
  styleUrls: ['./add-qoute.component.css']
})
export class AddQouteComponent implements OnInit {

  constructor(public service:HomeService) { }

  ngOnInit(): void {
    this.resetFrom();
  }
  resetFrom(form?:NgForm){
    if(form!=null)
    form.resetForm();

    this.service.formData={
      Qoute:'',
      Author:'',
      Name:''

    }

  }
  lorem = "lorem ipsum dolor sit amet ";

  public posts=[
    {'quote' : this.lorem , 'author' : 'brian' , 'name' : 'joan'},
    {'quote' : this.lorem , 'author' : 'tony' , 'name' : 'grishon'},
    {'quote' : this.lorem , 'author' : 'boyd' , 'name' : 'mary'},
    {'quote' : this.lorem , 'author' : 'henry' , 'name' : 'julian'},
    {'quote' : this.lorem , 'author' : 'john' , 'name' : 'joyce'},
  ];
  
  showList :posts;
  
  logValue(value1,value2,value3){
    console.log(value1);
    console.log(value2);
    console.log(value3);

    this.posts.push({quote : value1, author : value2 , name : value3})
    
  }
  onSubmit(){
    
    return true;

    
  }
 

}
