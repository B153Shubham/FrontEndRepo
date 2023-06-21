import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardHeaderRole } from 'src/app/model/dashboard-header-role';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  headerRoles : any[];

  constructor(private router : Router){}

  ngOnInit(){
    this.headerRoles = DashboardHeaderRole.dashHeaderRoles
    console.log(this.headerRoles);
    
  }

  navigateTo(path : any){
    this.router.navigateByUrl('/dash/'+path)
  }
}
