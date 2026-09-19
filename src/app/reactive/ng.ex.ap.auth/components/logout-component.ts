import {Componet, input} from '@angular/core';

@Component({
           selector : 'confirm';
           template : '
                  <h2 mat-dialog-titl>Logout</h2>
                  <mat-dialog-content>Aryou Sour wan to logout</mat-dialog-content>
                  <mat-dialog-action>
                    <button mat-button [mat-dialog-close]="false" > Cancel</button>  
                    <button mat-button [mat-dialgo-close="true"]>Ok</button>
                    <></>
                  </mat-dialog-action>
                      ',
            styles : ['
                       :host {
                         display : block;
                         width: 100%;
                         max-eidth: 300px;
                       }
                         
                        mat-dialot-actions {
                            display:flex;
                            justify-content : flex-ent;
                        }

                         [mat-button] {
                             padding : 0 ;
                         }
                       '],
            stanalon : false
})

export class logoutConfirmDialog{
}