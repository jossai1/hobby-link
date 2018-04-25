import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SharedService  } from  '../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,private SharedService: SharedService) { }

  ngOnInit() {
  }

  login() {
    this.router.navigate(["login"]);
  }

  register() {
    this.router.navigate(["register"]);
  }

/**
 - checks through uni domain json and checks if this email is a valid uni email
 - if valid uni email return true
 - else returns false
**/
  isAUniEmail(){

  }

  password:string;
  email:string;


}
