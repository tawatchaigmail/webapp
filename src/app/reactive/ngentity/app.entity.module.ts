import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store'
import {enviromentdevtools} from '../../environments/environments';

import {EntityRouting} from './entity.routing';

import {reportFileMastersReducer} from '../../store/ngrx/reducers/reportFileMasters.reducer'; 
        
import {EntityComponent} from './components/entity.component';
import {ReportFileMastersComponent} from './components/reportFileMasters/reportFileMasters.component';

import {reportFileMastersFeatureKey} from '../../models/appFeature';
        

@NgModule({
           imports : [
                      CommonModule,
                      EntityRouting,                      
                      StoreModule.forFeature( reportFileMastersFeatureKey , reportFileMastersReducer ),
                                              
                     ],
           exports : [],
           providers : [], 
           declarations : [EntityComponent, ReportFileMastersComponent]

})

export class AppEntityModule {}