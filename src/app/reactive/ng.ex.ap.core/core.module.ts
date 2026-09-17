import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {
        LayoutComponent,
        NavItemComponent,
        SidenavComponent
        ToolbarComponent,
        
       } from './component';
import {
        AppComponent,
        NotFoundPageCOmponent,
       } from './container';

import {materialModule} from './material'
import {} from './containner';

export cost COMPONENT = [
        AppComponent,
        NotFoundPageCOmponent,
        LayoutComponent,
        NavItemComponent,
        SidenavComponent
        ToolbarComponent,
 ]


@NgModule({
     imports : [commonModule,RouterModue,materialModule],
     declaration : [COMPONENT],
     exports : [COMPONENT],

})