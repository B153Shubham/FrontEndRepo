import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { AboutusComponent } from './MyDashBoard/aboutus/aboutus.component';
import { ContactsComponent } from './MyDashBoard/contacts/contacts.component';
import { LoginComponent } from './MyDashBoard/login/login.component';
import { DashboardComponent } from './MyDashBoard/dashboard/dashboard.component';
import { ReviewsComponent } from './MyDashBoard/reviews/reviews.component';
import { HeaderComponent } from './MyDashBoard/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { TemplateModule } from './template/template.module';


@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    ContactsComponent,
    LoginComponent,
    DashboardComponent,
    ReviewsComponent,
    HeaderComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    TemplateModule
   

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
