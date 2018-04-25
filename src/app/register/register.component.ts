import { Component, OnInit } from '@angular/core';
import { SharedService  } from  '../services/shared.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private SharedService: SharedService) { }

  ngOnInit() {
  }

  hobby:string[] = ["Music", "Sport", "Cooking", "Reading", "Programming","Photography"] ;

}
