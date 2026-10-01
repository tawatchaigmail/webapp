import {NgModule} from '@angular/core';
import { RouterModule,Routes} from '@angular/router'
import {MasterDetailModule} from './master.details.module'

export const masterRoute : Routes = [
                             { 
                                path : '',
                                component : masterDetailComponent,
                                children : {
                                              path : '/details',
                                              component : detailComponent ,
                                            }
                             }
]

@NgModule({
     imports : [
                  RouterModule.forchild(masterRoute)
               ],
     exports : [RouterModule],
})