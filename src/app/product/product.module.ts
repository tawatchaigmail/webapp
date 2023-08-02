import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRouteModule} from './product-routing.module';                                   

@NgModule({
   imports : [CommonModule,ProductRouteModule],
   exports : [],
   providers : [],
   declarations : []
})
export class ProductModule {}