import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import{MatInputModule} from '@angular/material/input'
import { FormsModule} from '@angular/forms'
import {HttpClientModule } from '@angular/common/http'
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AddQouteComponent } from './home/add-qoute/add-qoute.component';
import { EditQouteComponent } from './home/edit-qoute/edit-qoute.component';
import { ShowQouteComponent } from './home/show-qoute/show-qoute.component';

import { ContactService } from './services/contact.service'
import { HomeService } from './services/home.service'
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AddQouteComponent,
    EditQouteComponent,
    ShowQouteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
 
    HttpClientModule
  ],
  providers: [HomeService,ContactService],
  bootstrap: [AppComponent],
  entryComponents: [AddQouteComponent]
})
export class AppModule { }
