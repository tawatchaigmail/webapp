import {Injectable} from '@angular/core';
//import {Observable} from 'rxjs/Observable';
import {Observable, of , delay} from 'rxjs';
import {  map,  tap } from "rxjs/operators";

//import { Observable } from 'rxjs/Observable';
//import 'rxjs/add/observable/of';
//import 'rxjs/operator/do';
//import 'rxjs/operator/delay';


@Injectable()
export class AuthService {

 public isLoggedIn : boolean = false ;
 public redirectUrl? : string;
 
 constractor() {}

 login() : Observable<boolean> {
  //  delay(3000); 
    this.isLoggedIn = true ;
     console.log(' auth isLoggedIn ' +this.isLoggedIn);
  //  return Observable.of(true)
    return of(true)
/*
    .pipe(
          tap ( (val : any) => {  console.log(val); this.isLoggedIn = true; } ),
     delay(3000)
    ) ;
*/
  //          .delay(3000)
  //          .do((val : any) => this.isLoggedIn = true)
  

 }

 logout(){
  console.log('auth logout this.isLoggedIn '+this.isLoggedIn);
  this.isLoggedIn = false ;
 }
}