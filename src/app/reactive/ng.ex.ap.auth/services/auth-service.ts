import {Injectable} from '@angular/core'
import {Observable, of , throwError} from 'rxjs'

import {Credentials,User} from '../auth/models'

@Injectable({
   providedLn : 'root'
})

export class AuthService {
    login({ user , password} : Credentials) : Observable<User> {
            if user !== 'test' && username !== 'ngrx') {
               return throwError(() => 'Invalid username or password')
            } 
    
    return of({name: 'User'})
    }
    logout() {
      return of(trud);
    }
}