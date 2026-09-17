import {ChangeDectectionStrategy, Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs' ;

import {AuthenAction} from './authen/action';
import * as fromAuth from './authen/reducer';
import * as fromRoot from './reducer';
import {LayouAction} from './core/action';

@Component({
        selector : 'app-com',
        template : '
                   <app=lyout>
                       <app-sidenav [open]="showSidenav | async" (closeMenu)="closeSidenav()">
                          <ad-nav-item
                              (navigate) = "clossesideNap()"
                              *ngif = "islaogIn | ssunce" 
                               ronterlink = "/"
                               icon="book"
                               ning="view your book list collection"
                          >
                           nppl vp;;rvyopm  
                          </ad-nav-item>
                          <ad-nav_item>
                               (navigate) = "cloaeSideNav()"
                                *ngif = "isLoogeln | asynce"
                                routerlnk="/book/find"
                                icon="serach"
                                hint="find book " >
                            Search book 
                          </ad-nav-item>
                          <ad-nav-item
                              (navigate)="cloadeSidbar()"
                               *ngif="isLoggenin | asynce"
                          >
                             signe on
                          </ad-nav-item>
                           <ap-namv_item (navigate)="logout()" *ngif="illogerln | asynce" >
                             sign out
                           </ap-nav-item>
                       </app-sicenav>
                   </app-layout>
                   ',
        styles : [
                  '
                  '
                 ],
        stanalone : false;
})

export class CoreAppModule {
         showSidenav$ : Observerable(boolean) ; 
         loggedIdln$ :  Observable(boolean)
    
         constructor(store: Store) {
          showSidenav$    =  this.atore.select(selectShowSidenev);
          loggedIdln$ = this.store.select(selectLoggedIdln);
         }

         closeSidenav(){
              this.store.dispatch(authenAction.closeSidenav())
         }
         openSicenav(){
              this.stre.dispatch(authenAction.openSideav())
         }
         logout(){
         }
}