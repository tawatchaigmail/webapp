import {Component, OnInit, OnChanges, Input} from '@angular/core';
import {CommonModule,Location} from '@angular/common';
import {FormsModule, ReactiveFormsModule, FormArray, FormGroup, FormBuilder, Validators} from '@angular/forms';

//import {FormsModule, ReactiveFormsModule, FormBuilder ,Validators, ControlContainer,FormGroup, FormControl, NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';

import {ReportFileParameters} from '../../../../models/ngrx/reportFileParametersInterface'; ;
import {ReportFileMasters} from '../../../../models/ngrx/reportFileMastersInterface'; 

@Component({
           selector : 'ngx-repfilpar',
           templateUrl : './reportFileParameters.component.html',
           styleUrls : ['./reportFileParameters.component.scss'],

           standalone: true,
           imports : [
                      CommonModule,
                      FormsModule,
                      ReactiveFormsModule,

           ]
})

export class ReportFileParametersComponent implements OnInit {
   


   @Input() inputReportFilemaster? : ReportFileMasters ;

   reportFileMaster? : ReportFileMasters;
   reportFileParameters$? : ReportFileParameters[];

   itemReportParamForm =  this.formBuilder.group({
                                 
                                   REPORT_ID  : [''],
                                   SEQ_NO     : [''],
                                 
            }) ;

   fileRepprtMasterForm = this.formBuilder.group({
      REPORT_ID   : ['', [Validators.required]] ,
      REPORT_NAME : [''] ,
      FILENAME    : ['', [Validators.required]] ,
      REPORT_GROUP  : [''] ,
      DESCRIPTION   : [''] ,
      FLAG_LOG_FILE : [''] ,
      ORIENTATION   : [''] ,
      PAPER_SIZE   : [''] ,
      SHOW_FOOTER  : [''] ,
      FORM_FOOTER  : [''] ,
      CTRL_DOC_NUMBER  : [''] ,
    //  REPORT_PARAMS : [{}],      

      REPORT_PARAMS : this.formBuilder.array([this.itemReportParamForm]),  
               
   });
      
   constructor(private formBuilder : FormBuilder){
                                     
   }

   ngOnInit(){
    console.log('reportFileParameters componett');
    this.fileRepprtMasterForm.reset();
   // this.setReportParams(this.fileReportMaster.reportFileParameters);
   }

   createForm() {

   } 

   setReportParams(reportFileParameters : ReportFileParameters[]){
     const reportFileParamFormGroup = reportFileParameters.map(reportFileParam => this.formBuilder.group(reportFileParam) ) ;
     const reportFileParamArray = this.formBuilder.array(reportFileParamFormGroup);
   //  this.fileRepprtMasterForm.setControl('REPORT_PARAMS',reportFileParamArray);
                               
   }
   
   get reportFileParameters() : FormArray {
      return this.fileRepprtMasterForm.get('REPORT_PARAMS')as FormArray ;
   }

   ngOnChanges(dataForm : ReportFileMasters){
 /*
     this.fileRepprtMasterForm.reset(
     
            REPORT_ID :   this.reportFileMaster.REPORT_ID
            REPORT_NAME :   this.fileReportMaster.REPORT_NAME
            FILENAME :   this.fileReportMaster.FILENAME
            REPORT_GROUP :   this.fileReportMaster.REPORT_GROUP
            DESCRIPTION :   this.fileReportMaster.DESCRIPTION

            FLAG_LOG_FILE : this.reportFileMaster.FLAG_LOG_FILE ,
            ORIENTATION   : this.reportFileMaster.ORIENTATION ,.
            PAPER_SIZE   : this.reportFileMaster.PAPER_SIZE ,
            SHOW_FOOTER  : this.reportFileMaster.SHOW_FOOTER ,
            FORM_FOOTER  : this.reportFileMaster.FORM_FOOTER ,
            CTRL_DOC_NUMBER  : this.reportFileMaster.CTRL_DOC_NUMBER ,
      
      REPORT_PARAMS : this.formBuilder.array([]),               
      
     );           
  */
     
    //  setReportParams( this.fileReportMaster.fileReportMaster);
   }

  addClicked(){
   
   const itemForm = this.formBuilder.group({
      REPORT_ID  : [''],
      SEQ_NO     : [''],
   });
  
  //  this.reportFileMasters.push(itemForm) ;  
  
  }

  saveClicked(){
  }
  deleteClicked(){
  }
}