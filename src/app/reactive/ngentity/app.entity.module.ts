import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import {StoreModule, provideStore} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects';
import {enviromentdevtools} from '../../environments/environments';

import {EntityRouting} from './entity.routing';

import {reportFileMastersReducer} from '../../store/ngrx/reducers/reportFileMasters.reducer'; 
import {ReportFileMastersEffect} from '../../store/ngrx/effects/reportFileMasters.effects';
        
import {EntityComponent} from './components/entity.component';
import {ReportFileMastersComponent} from './components/reportFileMasters/reportFileMasters.component';
// import {ReportFileMasterDetailsComponent} from './components/reportFileMasterDetail/reportFileMasterDetail.component';
import {reportFileMastersFeatureKey} from '../../models/appFeature';


@NgModule({
           imports : [
                      CommonModule,
                      ReactiveFormsModule,
                      FormsModule,
                      EntityComponent,
                      EntityRouting,
                      
                      StoreModule.forFeature( reportFileMastersFeatureKey , reportFileMastersReducer ),

                      EffectsModule.forFeature(ReportFileMastersEffect),
                      
                                              
                     ],
           exports : [],
           providers : [                   
                   //    provideStore( {[reportFileMastersFeatureKey] : reportFileMastersReducer } )
                       ], 
           declarations : []

})

export class AppEntityModule {}