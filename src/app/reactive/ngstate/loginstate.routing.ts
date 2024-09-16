import {NgModule}  from '@angular/core' ;
import {RouterModule, Routes} from '@angular/router' ;

import {LoginStateComponent} from './components/loginstate.component';

const loginStateRoute : Routes = [
                                 {
                                   path : '' ,
                                   component : LoginStateComponent 
                                 }
                                 ];
@NgModule({
          imports : [
                     RouterModule.forChild(loginStateRoute),
                     ],
          exports : [RouterModule],
          providers : [],
})

export class LoginStateRouting {}