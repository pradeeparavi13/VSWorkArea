import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
//import { EmployeeServiceService } from './employee-service.service';
import { HttpClientModule } from '@angular/common/http';
//import{Employee} from './employee'
  

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   ReactiveFormsModule,
   FormsModule,
   HttpClientModule,
  // Employee,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
