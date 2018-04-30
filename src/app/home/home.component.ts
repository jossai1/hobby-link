import { Component, OnInit } from '@angular/core';
import { SharedService  } from  '../services/shared.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  uniName:string = "";
  constructor(private router: Router, private sharedService: SharedService) { }

  ngOnInit() {
    this.uniName = this.sharedService.getUniName() ;
  }

  hobbyArray: Array<Object> = [{"name":"Music", "show":true, "next":1,"img":"../assets/images/music-icon.png"}, {"name":"Singing","show":false,"next":2,"img":"../assets/images/singer.png"}];

  hobbies:string[] = ["Music", "Sport", "Cooking", "Reading", "Programming","Photography"] ;

  prevQ (questionGroup:any)
 {
   questionGroup.show = false;
   let prevEleIndex = questionGroup.next - 2;
   let prevEleIndexStr:string = prevEleIndex.toString();
   console.log(this.hobbyArray[prevEleIndexStr].show );
   this.hobbyArray[prevEleIndexStr].show = true;
 }

 nextQ (hobby:any)
 {
   hobby.show = false;
   let nextEleIndex:string = hobby.next.toString();
   console.log(this.hobbyArray[nextEleIndex].show );
   this.hobbyArray[nextEleIndex].show = true;
 }

}
