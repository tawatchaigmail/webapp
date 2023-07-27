import {NgModule} from '@angular/core' ;
import {CommonModule} from '@angular/common';

import {AuthGuadService} from '../service/auth/authGuadService'; 
import {AuthService} from '../service/auth/authService'; 

import {AdminRouteModule} from './admin-routing.module';
import {AdminComponent} from  './admin.component';
import {AdminCenterComponent} from  './components/admin-center.component/adminCenter.component';
import {AdminUsersComponent} from  './components/admin-users.component/adminUsers.component';
import {AdminProductComponent} from  './components/admin-product.component/adminProduct.component';
import {SendComponent} from './components/send.component/send';

@NgModule ({
    imports : [
              CommonModule,
              AdminRouteModule,
              ],
    exports : [
              ],
    providers: [
               AuthGuadService,
               AuthService
               ],
    declarations : [
                   AdminComponent,
                   AdminCenterComponent,
                   AdminUsersComponent,
                   AdminProductComponent,
              SendComponent
                   ],
   
 })

export class AdminModule {}