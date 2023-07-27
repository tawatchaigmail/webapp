import {NgModule} from '@angular/core' ;
import {Routes,RouterModule} from '@angular/router'

import {AuthGuadService} from '../service/auth/authGuadService'; 

import {AdminComponent} from './admin.component';
import {AdminCenterComponent} from  './components/admin-center.component/adminCenter.component';
import {AdminUsersComponent} from  './components/admin-users.component/adminUsers.component';
import {AdminProductComponent} from  './components/admin-product.component/adminProduct.component';

import {SendComponent} from './components/send.component/send';

const adminRoutes : Routes =  [
   { 
     path : 'admin' , component : AdminComponent ,
     canActivate : [AuthGuadService] ,
     children : [
                 {  path : '' , component : AdminCenterComponent ,
                    canActivateChild : [AuthGuadService],
                    children : [
                               {path : 'users' , component : AdminUsersComponent } ,
                               {path : 'product' , component : AdminProductComponent },
                               {path : 'send' , 
                                outlet : 'popup',
                                component : SendComponent }  

                              ]
                 },

                ]
   }
];


@NgModule ({
    imports : [RouterModule.forChild(adminRoutes)],
    exports  : [RouterModule],
    providers : [AuthGuadService]
 })


export class AdminRouteModule {}