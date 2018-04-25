import { Component, OnInit } from '@angular/core';
import { SharedService  } from  '../services/shared.service';
import { Router } from "@angular/router";

/**responsile for registering a users hobbies and then taking them home**/

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  uniName:string = "";
  constructor(private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.uniName = this.sharedService.getUniName() ;
  }

  hobby:string[] = ["Music", "Sport", "Cooking", "Reading", "Programming","Photography"] ;


    complete() {
      //will do some database check and then if auth success we route to home page
      this.router.navigate(["home"]);
    }

}
