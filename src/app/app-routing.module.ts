import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompanyComponent } from './components/company/companyComponent';
import { CompanyDetails } from './components/CompanyDetails/CompanyDetails';

import {DashbordComponent} from './components/dashbord/dashbord.component';
import {AboutComponent} from './components/about/about.component';
import {ReportsComponent} from './components/reports/reports.component';
import {HumansComponent} from './components/humans/humans.component';

import {CanDeactiveateGuardService} from './service/auth/canDeactivateGuardService';

import {CompanyDetailResolveSevice} from './service/company-detail-resolve.service';

const routes: Routes = [
  { path: '', redirectTo: 'dashbord', pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'dashbord', component: DashbordComponent }, 
  { path: 'home', component: HomeComponent },
  { path: 'report', component: ReportsComponent },
  { path: 'humans', component: HumansComponent },
  { path: 'company', 
           children : [
                      { path: '', component: CompanyComponent},
                      { path: 'add', component: CompanyDetails},    
                   //   { path: 'delete/:id', },
                      { path: 'edit/:id', component: CompanyDetails },
                      { path: 'view/:id', resolve : { company : CompanyDetailResolveSevice} , component: CompanyDetails }, 
                      ] },
  { path: 'addCompany', component: CompanyDetails,  title: 'company details' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers :[CanDeactiveateGuardService,CompanyDetailResolveSevice]
})
export class AppRoutingModule { }
