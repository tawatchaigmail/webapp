
import {Component, OnInit} from '@angular/core' ;
import {Store} from '@ngrx/store' ; 
import {Observable} from 'rxjs';
import {CommonModule} from '@angular/common' ; 
import {Router,NavigationExtras} from '@angular/router' ;
//import {getAuthUser, getAuthLoading, getAuthError} from '../../store/selectors/selectState';
import {increade, decreade, reset} from '../../store/actions/count.action';
import {UserState} from '../../models/stateInterface' ;
import {User} from '../../models/userInterface' ;
 
@Component({
   selector : 'ngx-login',
   templateUrl : './loginstate.component.html',
   styleUrls : ['./loginstate.component.scss']   
})

export class LoginStateComponent implements OnInit {
                                        
     //  user$ : Observable<User>;
         count$ : Observable<number>;
       
       constructor( 
     //               private store : Store<User>
                    private store : Store<{count : number}>
                  ) {
                      this.count$ = this.store.select('count');
                    } 
       
       ngOnInit() : void {
          console.log('ngOnInit');
        //  this.user$ = this.store.select(getAuthUser);
        }
        ngxLogin(){ 
            console.log('login');
        }
        ngxLogout(){          
            console.log('logout');
        }

        ngxCancel(){
               console.log('cancel'); 
        }

        increment(){
             this.store.dispatch(increade());
        }
        decrement(){
             this.store.dispatch(decreade());
        }
        resetment(){
             this.store.dispatch(reset());
        }
}