import {Component,ViewChild,ElementRef,OnInit,Input,Output} from '@angular/core';
//import {MatCardModule} from '@amgular/material/card'
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule, FormGroup, Validators, ControlContainer, FormControl, NgForm} from '@angular/forms';

import {ReportFileMastersForms} from '../../../../models/ngrx/reportFileMastersInterface'
import {ReportFileMastersFormService} from '../../../../service/ngrx/reportFileMasters.form.service';

@Component({
            selector    :  'app-master-report',
            templateUrl :  './details.report,file.master.component.html',
            styleUrls   : ['./details.report,file.master.component.scss'],
            standalone  : true,
            imports : [
                       CommonModule, 
                       FormsModule 
                     // MatCardModule,
            ],
})

export class DetailReportFileComponent implements OnInit {

 @ViewChild('detailForm') detailForm? :  NgForm  ;
//  @Input() reportFileMaster : ReportFileMastersForms = {
   reportFileMaster : ReportFileMastersForms = {
                                                       reportId    : 0,
                                                       reportName  : '',
                                                       fileName    : '',
                                                       description : '',
                                                       reportGroup : '',
                                                       orantation  : '',
                                                       ctrlDocNo   : '',
                                                       flagLogFile : '',
                                                       showFooter  : '', 
                                                       formFooter  : '',
                                                       paperSize   : ''
                                                       } ;                                             
     
     constructor( private reportFileMastersFormService : ReportFileMastersFormService) {
        //                            this.reportFileMaster =  reportFile ;

     }
     
     ngOnInit(){
     }
    
     doSubmit(data : any){
       console.log('submit value : '+data.value);
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
      
      this.reportFileMastersFormService.addData(data.value);
      data.reset();
  }
          
}