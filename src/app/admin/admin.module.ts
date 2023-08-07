import {NgModule} from '@angular/core' ;
import {CommonModule} from '@angular/common';

import {AdminRouteModule} from './admin-routing.module';
import {AdminComponent} from  './admin.component';
import {AdminCenterComponent} from  './components/admin-center.component/adminCenter.component';
import {AdminUsersComponent} from  './components/admin-users.component/adminUsers.component';

import {SendComponent} from './components/send.component/send';

@NgModule ({
    imports : [
              CommonModule,
              AdminRouteModule,
              ],
    exports : [
              ],
    providers: [
               ],
    declarations : [
                   AdminComponent,
                   AdminCenterComponent,
                   AdminUsersComponent,

              SendComponent
                   ],
   
 })

export class AdminModule {}