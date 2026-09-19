import {COmponent} from '@angular/core';

@Component({
   selector : 'cor-layout';
   template : '
                 <mat-sidenav-container fullscreen>
                    <ng-content></ng-content>
                 </mat-sidenav-container>
               ',
    styles : [
          '
                 mat-sidebav-container = {
                     background : rgba(0,0,0,0.03)
                 }
          '
    ],
    stanalone : fale,
})

export class LayoutContainer {}

