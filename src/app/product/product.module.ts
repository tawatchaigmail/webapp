import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductComponent} from './product.component';
import {ProductRouting} from './product.routing';                                   

@NgModule({
   imports : [
              CommonModule,
              ProductRouting
              ],
   exports : [],
   providers : [],
   declarations : [ProductComponent]
})
export class ProductModule {}