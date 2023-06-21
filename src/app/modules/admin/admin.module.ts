import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { ViewEmployeeComponent } from './view-employee/view-employee.component';
import { AddDealerComponent } from './add-dealer/add-dealer.component';
import { ViewDealerComponent } from './view-dealer/view-dealer.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { HttpClientModule } from '@angular/common/http';
// import { RouterModule } from '@angular/router';
// import { BrowserModule } from '@angular/platform-browser';
// import { AppRoutingModule } from 'src/app/app-routing.module';



@NgModule({
  declarations: [
    AddEmployeeComponent,
    ViewEmployeeComponent,
    AddDealerComponent,
    ViewDealerComponent
  ],
  imports: [
    CommonModule,
    // BrowserModule,
    // AppRoutingModule,
    // ReactiveFormsModule,
    // FormsModule,
    // HttpClientModule,
    // RouterModule
  ]
})
export class AdminModule { }
