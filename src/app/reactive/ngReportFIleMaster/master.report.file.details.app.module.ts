import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common';
import {FormsModule,FormGroup,FormControl,ReactiveFormsModule} from '@angular/forms';
import {StoreModule} from '@ngrx/store'
import {EffectsModule} from '@ngrx/effects'

//import {MatCardModule} from '@amgular/material/card'
                             
// import {ReactiveFormsModule} from '@angular/forms'
import {MasterReportFileDetailAppComponent} from './report.file.details.app.component';
import {MasterFileRoute} from './master.report.file.details.app.route';
//import {reportFileReducer,reportFileFeaturekey} from './reducers/report.file.reducer';

//import {ReportFileEffect} from './effects/ReportFileEffect';
//import {CollectionEffects} from './effects/CollectionEffects';

import {DetailPreviewReportFileComponent} from './components/detail.preview.report.file.master/preview.report.file.component'

@NgModule({       

    imports : [
               CommonModule,
               FormsModule,
               ReactiveFormsModule,
        //       MatCardModule,
               MasterFileRoute,
              MasterReportFileDetailAppComponent,
              DetailPreviewReportFileComponent
    ],
  
    exports : [
    //          StoreModule.forFeature(reportFileFeaturekey, reportFileReducer),
    //          EffectsModule.forFeature(CollectionEffects, ReportFileEffect)
    ],

    providers : [
    ],

    declarations : [ ],

})

export class ReportFIleMasterDetailAppModule {}



