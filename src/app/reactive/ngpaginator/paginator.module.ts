import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PaginatorRouting} from './paginator.routing';
import {AppPaginatorComponent} from './components/app-paginatoe.component';

import {PaginatorComponent}    from './components/paginatorStoreservice/paginatorStoreService';
import {PaginatorComponentStore} from './components/paginatorComponentStore/paginatorComponentStore';

import {enviromentdevtools} from '../../environments/environments';

@NgModule({

imports : [
          CommonModule,
          
          PaginatorRouting,

        //  enviromentdevtools.imports,
         ],
exports : [
         ],

declarations : [AppPaginatorComponent, PaginatorComponent, PaginatorComponentStore],
})

export class PaginatorModule {}