import {NgModule} from '@angular/core';
import {RouterModule,Routes} from '@angular/router';

import {AuthService} from '../admin/services/authService';
                                   
import {LoginComponent} from './login.component';

const loginRoutes : Routes = [
                       { path : 'login' , component : LoginComponent }
                    ];
@NgModule({
    imports : [RouterModule.forChild(loginRoutes)],
    exports : [RouterModule],
    providers : [AuthService ]
})

export class LoginRouteModule {}