import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpClass } from '../model/sign-up-class';

@Injectable({
  providedIn: 'root'
})
export class UserLoginService {
   url : string = "http://localhost:3000/SignUpClass";

  constructor(private http : HttpClient) { }

  saveSignUp (sc : SignUpClass){
    console.log(sc);
    return this.http.post(this.url,sc);
    
  }
}
