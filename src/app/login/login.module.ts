import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginComponent} from './login.component';
import {LoginRouteModule} from './login-routing.module';
import {DialogService} from '../service/auth/dialogService';

@NgModule({
   imports : [
             CommonModule,             
             LoginRouteModule
            ],

    exports : [              ],
    providers: [DialogService],
    declarations : [LoginComponent,]
})

export class LoginModule {}