import {Component, Output, EventEmitter} from '@angular/core';

@Component({
     selector : 'core-toolbar',
     template : '
                ',
     styles : [
              '
                  <mat-toolbar collor="primary"  >
                    <button (click)="openMenu.emit()" aria-label = Menu > 
                        <mat-icon>menu</mat-icon> 
                    </button>
                    <mat-content><mat-content>
                  </mat-toolbar>
               '

               ],
     stanalone : false ,
})

exort class ToolBarComponent {
    @output() openMenu = new EventEmitter(voic()) '
}