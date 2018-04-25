import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  uniName: string;
  uniData: any ; //fetch and set later

  constructor() {}

  setUniName (uniName: string){
    this.uniName = uniName;
  }

  getUniName() : string {
     return this.uniName;
  }
}
