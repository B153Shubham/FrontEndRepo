import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/shared/user-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
loginForm : FormGroup;
signUpForm : FormGroup;
signUpData : any;

constructor(private fb : FormBuilder,private router : Router, private ul : UserLoginService){}

ngOnInit(){
  this.loginForm=this.fb.group({
    username : [],
    password : []
  })

  this.signUpForm=this.fb.group({
    'name' : [''],
    'email' : [''],
    'mobileNumber' : [],
    'gender' : [''],
    'username' : [''],
    'password' : ['']
  })
}

onLogin(){
  if(this.loginForm.controls['username'].value
  && this.loginForm.controls['password'].value)
  {
    alert("Do you Want To login ......!");
    console.log(this.loginForm.value);
     this.router.navigateByUrl('/adminDash')
  }
}

onSignUp(){
  this.signUpData = this.signUpForm;
  alert("SignUp Successfully......!");
   this.ul.saveSignUp(this.signUpForm.value).subscribe();
}
}
