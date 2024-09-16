import {NgModule} from '@angular/core';
import {RouterModule, Routes,PreloadAllModules} from '@angular/router';

import {HomeComponent}    from './components/home/home.component';
import {CompanyComponent} from './components/company/companyComponent';
import {CompanyDetails}   from './components/CompanyDetails/CompanyDetails';

import {DashbordComponent} from './components/dashbord/dashbord.component';
import {AboutComponent}    from './components/about/about.component';
import {ReportsComponent}  from './components/reports/reports.component';
import {HumansComponent}   from './components/humans/humans.component';

import {AuthGuadService}            from './service/auth/authGuadService';
import {CanDeactiveateGuardService} from './service/auth/canDeactivateGuardService';
import {CompanyDetailResolveSevice} from './service/company-detail-resolve.service';

import {SelectivePreloadingStrategyService} from './service/selective-preloading-strategy.service';

const appRoutes: Routes = [
  { path: '', 
    redirectTo: 'dashbord', 
    pathMatch: 'full'
  },

  { 
    path : 'admin', 
    loadChildren : () =>  import ('./admin/admin.module').then(m => m.AdminModule ),
    canLoad : [AuthGuadService] 

  },

  { 
    path : 'nglogin', 
    loadChildren : () =>  import ('./reactive/ngstate/loginstate.module').then(m => m.LoginstateModule ),
  //  canLoad : [AuthGuadService] 

  },

  { 
    path : 'ngbook', 
    loadChildren : () =>  import ('./reactive/ngbook/book.module').then(m => m.BookModule ),
  //  canLoad : [AuthGuadService] 

  },
  { 
    path : 'ngscoreboard', 
    loadChildren : () =>  import ('./reactive/ngscoreboard/scoreboard.module').then(m => m.ScoreBoardModule ),
  //  canLoad : [AuthGuadService] 

  },

  { 
    path : 'ngmovices', 
    loadChildren : () =>  import ('./reactive/ngmovies/movies.module').then(m => m.MoviesModule ),
  //  canLoad : [AuthGuadService] 

  },

  { 
    path : 'ngentity', 
    loadChildren : () =>  import ('./reactive/ngentity/app.entity.module').then(m => m.AppEntityModule ),
  //  canLoad : [AuthGuadService] 

  },


  { 
    path : 'ngtoggle', 
    loadChildren : () =>  import ('./reactive/ngtoggle/toggle.module').then(m => m.ToggleModule ),
  //  canLoad : [AuthGuadService] 

  },

  { 
    path : 'ngpaginator', 
    loadChildren : () =>  import ('./reactive/ngpaginator/paginator.module').then(m => m.PaginatorModule ),
  //  canLoad : [AuthGuadService] 

  },

  { 
    path : 'ngdevtools', 
    loadChildren : () =>  import ('./reactive/ngdevtools/devtools.module').then(m => m.DevtoolsModule ),
  //  canLoad : [AuthGuadService] 
  },


  { 
    path : 'ngroute', 
    loadChildren : () =>  import ('./reactive/ngroute/app.route.module').then(m => m.AppRouteModule ),
  //  canLoad : [AuthGuadService] 
  },


  { 
    path : 'product', 
    loadChildren : () =>  import ('./product/product.module').then(m => m.ProductModule ),
    data: { preload: true }
  },



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
                      { path: 'view/:id', resolve :  { company : CompanyDetailResolveSevice} , component: CompanyDetails }, 
                      ] },
  { path: 'addCompany', component: CompanyDetails,  title: 'company details' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes,
                               //  {preloadingStrategy : PreloadAllModules}
                                 {preloadingStrategy : SelectivePreloadingStrategyService}
                                 )],
  exports: [RouterModule],
  providers :[
              AuthGuadService,
              CanDeactiveateGuardService,
              CompanyDetailResolveSevice,
              SelectivePreloadingStrategyService,
             ]
})
export class AppRouting { }
