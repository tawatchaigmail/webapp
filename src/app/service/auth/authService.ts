import {Injectable} from '@angular/core';
import {Observable, of , delay} from 'rxjs';
import {catchError, retry, map, tap, switchMap} from "rxjs/operators";

@Injectable(
// { providedIn: 'root',}
)
export class AuthService {

 public isLoggedIn : boolean = false ;
 public redirectUrl? : string;
 
 constructor() {
  console.log('AuthService : '+this.isLoggedIn);
 }

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

    console.log('auth isLoggedIn ' +this.isLoggedIn);
  
    return of(true).pipe(
                       tap ( (val : any) => {  
                                            this.isLoggedIn = true; 
                                            console.log(' map val '+this.isLoggedIn); 
                                            return val ;
                                            } 
                           ),
                       /*   
                       map ( (val : any) =>  { 
                                               this.isLoggedIn = true ; 
                                               console.log(' map val '+this.isLoggedIn);
                                               return val ; 
                                             } 
                           ),
                        
                       retry(5),  
                       catchError(err => { 
                                           console.log('login  '+err);
                                           return of(false) 
                                         }
                       )                    
                       */
                   );

                    
                   
/*
  return Observable.of(true)
            .delay(3000)
            .do((val : any) => this.isLoggedIn = true)
 */ 
 }

 logout(){
  console.log('auth logout isLoggedIn '+this.isLoggedIn);
  this.isLoggedIn = false ;
 }
}