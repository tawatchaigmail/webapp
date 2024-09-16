import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginComponent} from './login.component';
import {LoginRouting} from './login.routing';
import {DialogService} from '../service/auth/dialogService';

@NgModule({
   imports : [
             CommonModule,             
             LoginRouting
            ],

    exports : [              ],
    providers: [DialogService],
    declarations : [LoginComponent,]
})

export class LoginModule {}