import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {SignalComponent}  from './components/signal.component';

const signalRoutes : Routes = [
                              { path : '', 
                                component : SignalComponent
                              }
                            ] 

@NgModule({
               imports : [
                         RouterModule.forChild(signalRoutes)
                         ],
               exports : [RouterModule],
               providers : [],
})

export class SignalRouting {}