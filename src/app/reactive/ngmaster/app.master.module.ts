import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {MasterRouting} from './master.routing'; 

@NgModule({
               imports : [  CommonModule ,
                           FormsModule,
                           MasterRouting,                           
                         ],
               exports : [],
               providers : [],
               declarations : [],

})

 export class AppMasterModule {} ;

