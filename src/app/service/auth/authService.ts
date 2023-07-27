import {Injectable} from '@angular/core';
//import {Observable} from 'rxjs/Observable';
import {Observable, of , delay} from 'rxjs';
import { catchError, retry, map, tap, switchMap} from "rxjs/operators";
/*
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/operator/do';
import 'rxjs/operator/delay';
*/

@Injectable()
export class AuthService {

 public isLoggedIn : boolean = false ;
 public redirectUrl? : string;
 
 constractor() {}

private log(message: string) {
 // this.messageService.add(`CompanyService: ${message}`);
}


 private handleError<T>(operation = 'operation', result? : T){
  return (error : any) : Observable<T> => {
                 console.error(error);
                 this.log('${operation} failed : $(error.messate)');
                 return of (result as T);
              };
 }


 login() : Observable<boolean> {

    this.isLoggedIn = true ;
 //   console.log('auth isLoggedIn ' +this.isLoggedIn);
  
    return of(true)
                  .pipe(
                       tap ( (val : any) => {  console.log(' tab val '+val); this.isLoggedIn = true; } ),
                  
                      retry(5),  
                       catchError(err => of(true))
                    //   delay(3000) 
                   )
                 //  .subscribe((val:any) => console.log(val))                   
                   ;

                    
                   
/*
  return Observable.of(true)
            .delay(3000)
            .do((val : any) => this.isLoggedIn = true)
 */ 
 }

 logout(){
  console.log('auth logout this.isLoggedIn '+this.isLoggedIn);
  this.isLoggedIn = false ;
 }
}