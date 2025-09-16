import {NgModule} from '@angular/core'
import {RouterModule,Routes} from '@angular/router'

import {SignalServiceComponent} from './components/signal.service.component'

const signalServiceRoutes : Routes =  [
                                      {
                                        path :  '',
                                        component : SignalServiceComponent,
                                     }
                                     ]
@NgModule({  
                imports : [
                            RouterModule.forChild(signalServiceRoutes)
                          ],
                exports : [RouterModule],
                providers : [] ,
})

export class SignalServiceRouting{
}