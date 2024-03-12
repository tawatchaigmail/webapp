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
                  //   StoreModule.forRoot({}), 
                  //   StoreModule.forFeature('filter-app', filterReducer),
                     RouterModule.forChild(loginStateRoute),
                     ],
          exports : [RouterModule],
          providers : [],
})

export class LoginStateRouterModule {}