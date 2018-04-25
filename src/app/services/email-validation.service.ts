import { SharedService  } from  '../services/shared.service';
import { Injectable } from '@angular/core';
import * as uniEmails from './world_universities_and_domains.json';


@Injectable()
export class EmailValidationService {

  uniEmailsData:any = uniEmails;

  constructor(private sharedService:  SharedService) { }


    /**
     - checks through uni domain json and checks if this email is a valid uni email
     - if valid uni email return that unisdata
     - else returns null
    **/
    isAUniEmail (email : string) : any {
      let emailDomain : string = this.extractDomain(email);

      let isUniEmail : boolean = false;
      let uniData = null;
      let uniName = "";

      this.uniEmailsData.forEach(function(uniObj) {

        let possibleDomains = uniObj.domains;

        possibleDomains.forEach(function(domain) {
          if (emailDomain === domain) {
            console.log(domain);

            uniName = uniObj.name;
            isUniEmail = true;
            return isUniEmail;
          }
        });
      });
      this.sharedService.setUniName(uniName);

      return isUniEmail;
    }



    extractDomain(email:string) : string {

      let domain =  email.split("@")[1];

      return domain;

    }


}
