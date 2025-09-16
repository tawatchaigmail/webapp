import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {SignalServiceRouting} from './signal.service.routing';
import {SignalServiceComponent} from './components/signal.service.component';

@NgModule({
              imports : [ CommonModule,
                          FormsModule,
                          SignalServiceRouting,
                          
                        ],
              exports : [],
              providers : [],
              declarations : [] // SignalServiceComponent
})

export class AppSIgnamServiceModuel {} ;