import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common';
import {FormsModule,FormGroup,FormControl,ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'

//import {MatCardModule} from '@amgular/material/card'
                             
// import {ReactiveFormsModule} from '@angular/forms'
import {MasterReportFileDetailAppComponent} from './report.file.details.app.component';

import {MasterFileRoute} from './master.report.file.details.app.route';
import {ContainersLayoutComponent} from './containers/containers.layout'
//import {reportFileReducer,reportFileFeaturekey} from './reducers/report.file.reducer';

//import {ReportFileEffect} from './effects/ReportFileEffect';
//import {CollectionEffects} from './effects/CollectionEffects';

import {ReportFileMasterListsComponent}      from './components/report.file.master.lists/report.file.master.lists.component';  
import {ReportMasterParametersListComponent} from './components/report.file.parameters.lists/report.master.parameters.list.component';
import {DetailPreviewReportFileComponent}    from './components/detail.preview.report.file.master/preview.report.file.component';
import {DetailReportFileComponent}           from './components/detail.report.file.master/details.report.file.master.component';
import {DetailReportParameterComponent}      from './components/detail.report.file.parameter/detail.report.file.parameter.component';

@NgModule({       

    declarations : [                   
                   ],
    imports : [
               CommonModule,
               FormsModule,
               ReactiveFormsModule,
               MasterFileRoute,
               MasterReportFileDetailAppComponent,
               ContainersLayoutComponent,
                   ReportFileMasterListsComponent,
                   ReportMasterParametersListComponent,

               DetailReportFileComponent,
               DetailReportParameterComponent,
               DetailPreviewReportFileComponent

             ],
  
    exports : [
    //          StoreModule.forFeature(reportFileFeaturekey, reportFileReducer),
    //          EffectsModule.forFeature(CollectionEffects, ReportFileEffect)
    ],

    providers : [
    ],


})

export class ReportFIleMasterDetailAppModule {}



