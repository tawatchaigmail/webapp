import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HousingLocationComponent } from './components/housing-location/housing-location.component';

import { DashbordComponent} from './components/dashbord/dashbord.component';

import { ReportsComponent } from './components/reports/reports.component';

import { HumansComponent } from './components/humans/humans.component';
import { HumansDetailsComponent } from './components/humans-details/humans-details.component';

import { Base64Pipe } from './share/convert-base64-img.pipe';

//export const ENVIRONMENT = new InjectionToken<{ [key: string]: any }>('environment');

//import { CompanyComponent } from './components/company/companyComponent';
//import { CompanyDetails } from './components/CompanyDetails/CompanyDetails';

// import {AdminModule} from './admin/admin.module';
import {LoginModule} from './login/login.module';

import {DialogService} from './service/auth/dialogService';
import {AuthGuadService} from './service/auth/authGuadService'; 
import {AuthService} from './service/auth/authService'; 

import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {HttpInterceptorService} from './service/interceptor/interceptor.service';

import {InfoService} from './service/info/info.service';

@NgModule({
  declarations: [      
      AppComponent,
      DashbordComponent,           
   //   HumansComponent,
      HumansDetailsComponent,
   //   Base64Pipe,
      
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HomeComponent ,   
    HousingLocationComponent,
    ReportsComponent,
    
 //   AdminModule,    
    LoginModule,
    
  ],
  exports:[],
  providers: [
               AuthGuadService,
               AuthService,
               InfoService,
               {
                provide : HTTP_INTERCEPTORS,
                useClass : HttpInterceptorService ,        
                multi : true,
               },

/*
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: 'AUTH_URL', useValue: 'http://localhost:8080/auth' },
    { provide: 'API_URL', useValue: 'http://localhost:8080/api' },
    { provide: 'HEADERS', useValue: new HttpHeaders({'Content-Type': 'application/json'}) },

*/
             ],
  bootstrap: [AppComponent]

})
export class AppModule { }
