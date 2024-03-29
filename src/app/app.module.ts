import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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


@NgModule({
  declarations: [
      AppComponent,
      DashbordComponent,
      ReportsComponent,
      HumansComponent,
      HumansDetailsComponent,
      Base64Pipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    HomeComponent ,   
    HousingLocationComponent,
    
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
