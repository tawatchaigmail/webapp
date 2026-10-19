import {Component,OnInit,Input,Output} from '@angular/core';
import {RouterModule, RouterLink} from '@angular/router'

import {ReportFileMastersForms} from '../../../../models/ngrx/reportFileMastersInterface'

@Component({
            selector    :  'app-report-file-preview',
            templateUrl :  './preview.report.file.component.html',
            styleUrls   : ['./preview.report.file.component.scss'],
            standalone  : true,
            imports : [
                      RouterModule
            ],
})

export class DetailPreviewReportFileComponent implements OnInit {
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
     constructor() {
     }
  get id() {
      return this.reportFileMaster.reportId ;
  }
     ngOnInit(){}
          
}