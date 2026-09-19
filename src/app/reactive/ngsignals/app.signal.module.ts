import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {SignalRouting} from './signal.routing'; 
import {SignalComponent}  from './components/signal.component';
import {SignalStateCountComponent} from './components/signalStateComponent/signal.state.component';
//import {BookListComponent} from './components/signalServiceComponent/book-list-service.component';

@NgModule({
               imports : [ CommonModule ,
                           FormsModule,
                           SignalRouting,
                           
                         ],
               exports : [],
               providers : [],
               declarations : [
                               ],

})

 export class AppSignalModule {} ;
 