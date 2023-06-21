import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './MyDashBoard/dashboard/dashboard.component';
import { LoginComponent } from './MyDashBoard/login/login.component';
import { AboutusComponent } from './MyDashBoard/aboutus/aboutus.component';
import { ContactsComponent } from './MyDashBoard/contacts/contacts.component';
import { ReviewsComponent } from './MyDashBoard/reviews/reviews.component';

import { AddEmployeeComponent } from './modules/admin/add-employee/add-employee.component';
import { AddDealerComponent } from './modules/admin/add-dealer/add-dealer.component';

import { ViewDealerComponent } from './modules/admin/view-dealer/view-dealer.component';
import { ViewEmployeeComponent } from './modules/admin/view-employee/view-employee.component';
import { AdminDashboardComponent } from './template/admin-dashboard/admin-dashboard.component';
import { AdminHeaderComponent } from './template/admin-header/admin-header.component';
import { AdminSidebarComponent } from './template/admin-sidebar/admin-sidebar.component';

const routes: Routes = [
  {
    path : '',redirectTo : 'dash', pathMatch : 'full'
  },
  {
    path : 'dash', component : DashboardComponent,
    children : [
      {
        path : 'login', component : LoginComponent
      },
      {
        path : 'aboutus', component : AboutusComponent
      },
      {
        path : 'contact', component : ContactsComponent
      },
      {
        path : 'review', component : ReviewsComponent
      }
    ]
  },
  {
    path : 'adminDash', component : AdminDashboardComponent,
    children : [
      {
        path : 'adminHeader', component : AdminHeaderComponent
      },
      {
        path : 'adminSidebar', component : AdminSidebarComponent
      },
      {
        path : 'addDealer', component : AddDealerComponent
      },
      {
        path : 'viewDealer', component : ViewDealerComponent
      },
      {
        path : 'addEmployee', component : AddEmployeeComponent
      },
      {
        path : 'viewEmployee', component : ViewEmployeeComponent
      }
    ]
  }
  
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
