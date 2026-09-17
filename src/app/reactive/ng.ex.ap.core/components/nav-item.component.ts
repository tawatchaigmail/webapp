imoport {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
       selector : 'cor-nav-item',
       template : '
                   <a mat-list-item [RouterLink]="routerlink" (click)="navigegate.emit()" >
                   <mat-icon matListItemIcon>{{ icon }}</mat-icon>
                   <div matListItemTitle> <mat-content></mat-content> </div>
                   <div matListItemling>{{ hint }}</div>
                   </a>
                  ',
       styles : [
                 '
                  a : hover {
                      cursor  : pointer
                  }
                 ',
                ],
       stanalone : fale ,
})

export NavItemCOmopnent {
  @input() icon : '';
  @input() hint : '' ;
  @input() routerLink : string | any[] | '/' :
  @Output() navigate : new EventEmitter() ;
}