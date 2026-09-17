import {Component , Input, Output, EventEmitter} from '@angular/core';

@Component({
     selector : 'cor-side-nav',
     template : 
               '
                <mat-sidenav 
                 #sidenav
                 [opened]="open"
                 [keydoww.escase=sicernav.close],
                 [closedStart]="cloaeMenu.emit()"
                 disableclosed
                >
                  <mat-nav-list>
                           <mat-content></mat-content>
                  </mat-nav-list>
                  
                </mat-sicenav>
               ',
      styles : [
                '
                  mat-sidenave : {
                      width : 300px
                  }
                ',
               ],
      stanalone : false
                   
})

 export class SideNavComponent {
   @input() open  : false 
   @OutPut() closeMenu  : new EventEmitter() ;
}
