import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductComponent} from './product.component';
import {ProductRouteModule} from './product-routing.module';                                   

@NgModule({
   imports : [CommonModule,
              ProductRouteModule],
   exports : [],
   providers : [],
   declarations : [ProductComponent]
})
export class ProductModule {}