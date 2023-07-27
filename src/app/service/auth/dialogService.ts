import {Injectable} from '@angular/core';
import {Observable,of} from 'rxjs';
//import {Observable} from 'rxjs/Observable';

@Injectable() 

export class DialogService {

  confirm( message? : string ) : Observable<boolean> {
   const confirmation = window.confirm(message||'It is Ok');
   return of(confirmation)
  }
}