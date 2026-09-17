import {NgModule} from '@angular/core'
import {Router} from '@angular/router'
import {LoginPageComponent} from '../auth/containers';

const routes : Routes = [
    { path: 'login' , component: LoginPagesComponent,data: {title: 'Login'} },
]

@NgModule({
   imports: [RouterModule.forChild(routes)],
   exports: [RouterModule],
})

export class AuthRoutingModule {}