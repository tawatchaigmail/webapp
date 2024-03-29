import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompanyComponent } from './components/company/companyComponent';

import {DashbordComponent} from './components/dashbord/dashbord.component';
import {AboutComponent} from './components/about/about.component';
import {ReportsComponent} from './components/reports/reports.component';
import {HumansComponent} from './components/humans/humans.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashbord', pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  { path: 'dashbord', component: DashbordComponent }, 
  { path: 'home', component: HomeComponent },
  { path: 'report', component: ReportsComponent },
  { path: 'humans', component: HumansComponent },
  { path: 'company', component: CompanyComponent,  title: 'company' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
