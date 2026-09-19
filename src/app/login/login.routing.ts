import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {AuthService} from '../service/auth/authService';
import {CanDeactiveateGuardService} from '../service/auth/canDeactivateGuardService';
                                   
import {LoginComponent} from './login.component';

const loginRoutes : Routes = [
                       { path : 'login' , 
                         component : LoginComponent , 
                         canDeactivate : [CanDeactiveateGuardService]
                       }
                    ];
@NgModule({
    imports : [RouterModule.forChild(loginRoutes)],
    exports : [RouterModule],
    providers : [AuthService ]
})

export class LoginRouting {}