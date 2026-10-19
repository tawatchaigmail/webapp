import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common';
import {FormsModule,FormGroup,FormControl,ReactiveFormsModule} from '@angular/forms';

//import {MatCardModule} from '@amgular/material/card'
                             
// import {ReactiveFormsModule} from '@angular/forms'
import {MasterReportFileDetailComponent} from './report.file.details.app.component'
import {MasterFileRoute} from './master.report.file.details.app.route'

import {DetailPreviewReportFileComponent} from './components/detail.preview.report.file.master/preview.report.file.component'

@NgModule({       

    imports : [
               CommonModule,
               FormsModule,
               ReactiveFormsModule,
        //       MatCardModule,
               MasterFileRoute,
               MasterReportFileDetailComponent,
              DetailPreviewReportFileComponent
    ],
  
    exports : [
              
    ],

    providers : [
    ],

    declarations : [ ],

})

export class ReportFIleMasterDetail {}



