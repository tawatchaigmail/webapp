import {Component,ViewChild,ElementRef,Input,OnInit,Output,Injectable} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule, FormGroup, Validators, ControlContainer, FormControl, NgForm} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
// import {MatCardModule} from '@amgular/material/card'

import {ReportFileParametersForms, ReportFileParametersFormsId} from '../../../../models/ngrx/reportFileParametersInterface'
import {ReportFileParametersFormService} from '../../../../service/ngrx/reportFileParamsters.form.service';

@Component({
            selector    :  'app-master-report-parameter',
            templateUrl :  './detail.report.file.parameter.component.html',
            styleUrls   : ['./detail.report.file.parameter.component.scss'],
            standalone  : true,
            imports : [
                      CommonModule,
                      FormsModule 
                    //  MatCardModule
            ],
})


export class DetailReportParameterComponent implements OnInit {

     @ViewChild('detailForm') detailForm? :  NgForm  ;
  // @Input() reportFileParameter : ReportFileParametersForms = {
      reportFileParameter : ReportFileParametersForms = {
                                                                seqNo    : 0,
                                                                reportId : 0,
                                                                parameterName  : '',
                                                                initialValue   : '',
                                                                initialValueTo : '',
                                                                description    : '',
                                                                rgText         : '',
                                                                rgText2        : '',
                                                                dataType       : '',
                                                                updatedAllowed : '',
                                                                multiFlag      : ''
                                                                } ;                                        

     public formData = new FormData();
     
     constructor(private route : ActivatedRoute,
                 private reportFileParametersService : ReportFileParametersFormService) {
        // this.reportFileParameter = data ;
     }
     
     ngOnInit(){
         /*
         let id : number = this.route.snapshot.paramMap.get('id') || '';
         if (id !== null ) {
               console.log('ngOnInit id :'+id);
               this.reportFileParametersService.getDataById(id);
         }
         */
     }

     doSubmit(data : any){
      console.log('submit value :');
      /*
      comData.setValue({
                        "SEQ_NO" : "",
                        "COMPANY": "",
                        "DESCRIPTION" : "",
                        "COMPANY_ADDRESS" : "",
                        "TAX_ID" : "",
                        "TELEPHONE" : "",
                        "CREATED_ON" : "",
                        "CREATED_BY" : "",
                        "NARRATION" : "",
                        "LOGO" : "",
                       });
      */
     console.log(JSON.stringify(data.value));
      
      this.reportFileParametersService.addData(data.value);
      data.reset();
  }          

}