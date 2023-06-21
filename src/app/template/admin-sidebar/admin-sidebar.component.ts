import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent {
  constructor(private router : Router){}

  addDealer(){
    this.router.navigateByUrl('/adminDash/addDealer');
  }

  viewDealer(){
    this.router.navigateByUrl('/adminDash/viewDealer');
  }

  addEmployee(){
    this.router.navigateByUrl('/adminDash/addEmployee');
  }

  viewEmployee(){
    this.router.navigateByUrl('/adminDash/viewEmployee');
  }
}
