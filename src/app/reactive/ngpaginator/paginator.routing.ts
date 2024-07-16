import {NgModule } from '@angular/core';

import {RouterModule,Routes} from '@angular/router';

import {AppPaginatorComponent} from './components/app-paginatoe.component';
import {PaginatorComponent} from './components/paginatorStoreservice/paginatorStoreService';
import {PaginatorComponentStore} from './components/paginatorComponentStore/paginatorComponentStore';

export const paginatorRoutes : Routes = [
                                     {
                                      path : '',
                                      component : AppPaginatorComponent,
                                     },
                                     {
                                      path : 'ngpaginator',
                                      component : PaginatorComponent,
                                     },
                                     {
                                      path : 'ngpaginatorcomstore',
                                      component : PaginatorComponentStore,
                                     },
                                     ];


@NgModule({
          imports : [
                     RouterModule.forChild(paginatorRoutes)
                    ],
          exports : [RouterModule],
       
    
})


export class PaginatorRouting {}