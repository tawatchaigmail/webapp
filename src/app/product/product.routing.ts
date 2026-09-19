import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {ProductComponent} from './product.component';

const productRouter : Routes = [
                                 {path : '' , component : ProductComponent   }
                                ]

@NgModule({
    imports : [RouterModule.forChild(productRouter)],
    exports : [RouterModule],
    providers : [],
})
export class ProductRouting {}