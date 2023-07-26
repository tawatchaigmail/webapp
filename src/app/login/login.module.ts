import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginComponent} from './login.component';

import {LoginRouteModule} from './login-routing.module';

@NgModule({
   imports : [
             CommonModule,             
             LoginRouteModule
            ],

    exports : [              ],
    providers: [               ],
    declarations : [LoginComponent,]
})

export class LoginModule {}