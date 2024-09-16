
import {Component, OnInit} from '@angular/core' ;
import {Store} from '@ngrx/store' ; 
import {Observable} from 'rxjs';
import {CommonModule} from '@angular/common' ; 
import {Router,NavigationExtras} from '@angular/router' ;
//import {getAuthUser, getAuthLoading, getAuthError} from '../../../store/selectors/selectState';
import {increade, decreade, reset} from '../../../store/actions/count.action';
import {UserState} from '../../../models/stateInterface' ;
import {User} from '../../../models/userInterface' ;
 
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
/*
       ngOnInit() {
       this.counter = this.store.select(fromRoot.selectCount, { multiply: 2 })
}


ngOnInit() {
  this.counter2 = this.store.select(fromRoot.selectCount(), { id: 'counter2', multiply: 2 });
  this.counter4 = this.store.select(fromRoot.selectCount(), { id: 'counter4', multiply: 4 });
  this.counter6 = this.store.select(fromRoot.selectCount(), { id: 'counter6', multiply: 6 });
}

*/
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