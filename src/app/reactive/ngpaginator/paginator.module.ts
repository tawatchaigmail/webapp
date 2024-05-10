import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {PaginatorRoutingModule} from './paginator-routing.module';
import {AppPaginatorComponent} from './components/app-paginatoe.component';

import {PaginatorComponent}    from './components/paginatorStoreservice/paginatorStoreService';
import {PaginatorComponentStore} from './components/paginatorComponentStore/paginatorComponentStore';

@NgModule({

imports : [
          CommonModule,
          
          PaginatorRoutingModule,
         ],
exports : [
         ],

declarations : [AppPaginatorComponent, PaginatorComponent, PaginatorComponentStore],
})

export class PaginatorModule {}