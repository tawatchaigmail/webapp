import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Router,Resolve,
        ActivatedRouteSnapshot,
   //     NavigationExtras,
        RouterStateSnapshot} from '@angular/router';

import {CompanyService} from './company.service';
import {CompanyInterface} from '../models/companyInterface';

@Injectable()


export class CompanyDetailResolveSevice {
   constructor (
                private companyService : CompanyService ,
                private router : Router
                ){}

   resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<CompanyInterface>{
      let id : string  = route.paramMap.get('id') as string;
      console.log(' resolve '+id);
      return this.companyService.getCompanyById(id)
                                 /*   
                                 .subscribe( companies  =>  {
                                   console.log(companies);
                                 
                                  if (companies) {
                                      return companies ;
                                   } 
                                  else {
                                      this.router.navigate(['/companies']);
                                      return null;
                                   }
                                
                                 }
                                 )
                                 */
                                   ;
   }
}