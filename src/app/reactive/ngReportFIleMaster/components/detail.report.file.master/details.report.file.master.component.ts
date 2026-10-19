import {Component,OnInit,Input,Output} from '@angular/core';
//import {MatCardModule} from '@amgular/material/card'
//import {CommonModule} from '@angular/common';
//import {FormsModule,FormGroup,FormControl} from '@angular/forms';

import {ReportFileMastersForms} from '../../../../models/ngrx/reportFileMastersInterface'

@Component({
            selector    :  'app-master-report',
            templateUrl :  './details.report,file.master.component.html',
            styleUrls   : ['./details.report,file.master.component.scss'],
            standalone  : true,
            imports : [
                     //  CommonModule, 
                     //  FormsModule, 
                     // MatCardModule,
            ],
})

export class DetailReportFileComponent implements OnInit {
  @Input() reportFileMaster : ReportFileMastersForms = {
                                                       reportId    : '',
                                                       fileName    : '',
                                                       description : '',
                                                       reportGroup : '',
                                                       orantation  : '',
                                                       ctrlDocNo   : '',
                                                       flagLogFile : '',
                                                       paperSize   : ''
                                                       } ;                                             
     /*
     constructor(reportFile : ReportFileMastersForms) {
                                    this.reportFileMaster =  reportFile ;

     }
     */
     ngOnInit(){}
          
}