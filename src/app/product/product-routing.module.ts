import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

const productRouter : Routes = [
                                 {path : '' , }
                                ]

@NgModule({
    imports : [RouterModule.forChild(productRouter)],
    exports : [RouterModule],
    providers : [],
})
export class ProductRouteModule {}