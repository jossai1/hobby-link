import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { SharedService  } from  '../services/shared.service';
import { EmailValidationService  } from  '../services/email-validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [EmailValidationService]
})
export class LoginComponent implements OnInit {

  password:string;
  email:string;
  nonUniEmail: boolean = false;

  constructor(private router: Router, private sharedService: SharedService, private emailValidationService: EmailValidationService) { }

  ngOnInit() {
  }

  users: Array<Object> = [ {email:"test@soton.ac.uk", password:"cheese"},{email:"test@rdg.ac.uk", password:"cake"}];

  login() {
    if (this.email) {
      let found = false;
      //will do some database check and then if auth success we route to home page
      for (let i = 0 ; i < this.users.length; i++ ) {
        if (this.users[i.toString()].email === this.email && this.users[i.toString()].password === this.password){
            console.log("passss");
            //// TODO: remove later; calling validate to set uni name eventually we will have a seperate login auth thingy
            this.validateEmail(this.email);
            found = true;
        }
      }
      if(found === true ){
        this.router.navigate(["home"]);
      }
      else {
        alert("user not found");
      }
    }
  }

  /**
   - checks through uni domain json and checks if this email is a valid uni email
   - if valid uni email return true
   - else returns false
  **/
  validateEmail (email: string) : boolean {
    // let isUniEmail = false;

    let isValid = this.emailValidationService.isAUniEmail(email);

    if(isValid === true){
      return true;
    } else {
      return false;
    }
  }


  register() {
    if(!this.email) {

    } else {
      let isValidEmail = this.validateEmail(this.email);

      if (isValidEmail === true) {
        alert("success!" + " " + this.email);
        this.users.push({email:this.email, password:this.password});
        this.router.navigate(["register"]);
      } else {
        this.nonUniEmail = true;
        alert("Sorry, this app is only available to University students :)");
      }
    }
  }
}
