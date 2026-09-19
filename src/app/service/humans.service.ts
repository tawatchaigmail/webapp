import {Injectable} from '@angular/core';
import {Observable,of} from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import {HumansInterface} from '../models/humansInterface';
import {environment} from '../environments/environments';

@Injectable({
   providedIn : 'root'
})

export class HumansService{
  private humanUrl = environment.apiUrl+'/api/humans';  // URL to web api
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };  
  
  private humans? : HumansInterface[] ;

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


  constructor( private http :HttpClient ){}

  getHumans() : Observable<HumansInterface[]> {     
    return this.http.get<HumansInterface[]>(this.humanUrl+'/readall')
      .pipe(
        tap(_ => this.log('fetched humans')),
        catchError(this.handleError<HumansInterface[]>('getHumansUrl(',[]))
     );  
  }

  
}
