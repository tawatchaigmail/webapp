import {NgModule} from '@angular/core' ;
import {Routes,RouterModule} from '@angular/router'

import {AuthGuadService} from './services/authGuadService'; 

import {AdminComponent} from './admin.component';
import {AdminCenterComponent} from  './components/admin-center.component/adminCenter.component';
import {AdminUsersComponent} from  './components/admin-users.component/adminUsers.component';
import {AdminProductComponent} from  './components/admin-product.component/adminProduct.component';

const adminRoutes : Routes =  [
   { 
     path : 'admin' , component : AdminComponent ,
     canActivate : [AuthGuadService] ,
     children : [
                 {  path : '' , component : AdminCenterComponent ,
                    canActivateChild : [AuthGuadService],
                    children : [
                               {path : 'users' , component : AdminUsersComponent } ,
                               {path : 'product' , component : AdminProductComponent } 
                              ]
                 }
                ]
   }
];


@NgModule ({
    imports : [RouterModule.forChild(adminRoutes)],
    exports  : [RouterModule],
    providers : [AuthGuadService]
 })


export class AdminRouteModule {}