import {Component,Input,OnInit,Output,Injectable} from '@angular/core';
// import {MatCardModule} from '@amgular/material/card'
//import {CommonModule} from '@angular/common';
//import {FormsModule,FormGroup,FormControl} from '@angular/forms';

import {ReportFileParametersForms} from '../../../../models/ngrx/reportFileParametersInterface'

@Component({
            selector    :  'app-master-report-parameter',
            templateUrl :  './detail.report.file.parameter.component.html',
            styleUrls   : ['./detail.report.file.parameter.component.scss'],
            standalone  : true,
            imports : [
                    //  CommonModule, 
                    //  MatCardModule
            ],
})

// @Injectable()
export class DetailReportParameterComponent implements OnInit {
     @Input() reportFileParameter : ReportFileParametersForms = {
                                                                seqNo    : 0,
                                                                reportId : '',
                                                                parammetrName  : '',
                                                                initialValue   : '',
                                                                initialValueTo : '',
                                                                deswcription   : '',
                                                                rgText         : '',
                                                                rgText2        : '',
                                                                dataType       : '',
                                                                updatedAllowed : '',
                                                                multiFlag       : ''
                                                                } ;                                        
     /*
     constructor( data : ReportFileParametersForms) {
         this.reportFileParameter = data ;
     }
     */
     ngOnInit(){}
          
}