import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {Router,Resolve,
        ActivatedRouteSnaphot,
     //   NavigationExtras,
        RouterStateSnapshot} from '@angular/router' ;


@Injectable()

export AuthRosolveService {
       constructor(
                   private router: Router,
               //    private service  
       ){}

       resolve(route : ActivatedRouteSnapshot ,state : RouterStateSnapshot):Observable<> {
           let id string = route.paramMap.get('id') as sring ;
           return this.service.getbyId('')
       }
       
}