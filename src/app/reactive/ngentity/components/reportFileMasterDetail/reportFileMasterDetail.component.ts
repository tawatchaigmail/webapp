import {Component, Input, OnInit,SimpleChanges} from '@angular/core';
import {CommonModule,Location} from '@angular/common';
import {FormsModule, ReactiveFormsModule, FormBuilder ,Validators, ControlContainer, FormGroup, FormControl, NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';

import { Observable } from 'rxjs';

import {ReportFileMasters} from '../../../../models/ngrx/reportFileMastersInterface'; 
//import {ReportFileMastersService} from '../../../../service/ngrx/reportFileMasters.service';
import {reportFileMastersAction} from '../../../../store/ngrx/actions/reportFileMasters.action';

//import {reportFileSelector} from '../../../../store/ngrx/selector/reportFileMasters.selector';

@Component({
           selector : 'ngx-repfilmas-item',
           templateUrl : './reportFileMasterDetail.component.html',
           styleUrls : ['./reportFileMasterDetail.component.scss'],
           standalone: true,
           
           imports : [
                      CommonModule,
                      FormsModule,
                      ReactiveFormsModule,
                     ],
           
})

export class ReportFileMasterDetailsComponent implements OnInit {
 

//  reportFileMasters$ :   Observable<ReportFileMasters[]> = this.store.select(reportFileSelector) ;

  detailForm = this.formbuilder.group({

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
     
  });


newReportFileMaster = {

      REPORT_ID   : '' ,
      REPORT_NAME : '' ,
      FILENAME    : '' ,
      REPORT_GROUP  : '' ,
      DESCRIPTION   : '' ,
      FLAG_LOG_FILE : '' ,
      ORIENTATION   : '' ,
      PAPER_SIZE   : '' ,
      SHOW_FOOTER  : '' ,
      FORM_FOOTER  : '' ,
      CTRL_DOC_NUMBER  : '' ,
     
  }

//  @Input() reportFileMaster? : ReportFileMasters | JSON | undefined ;
  @Input() reportFileMaster : ReportFileMasters | undefined ;

   constructor(
//               private store : Store<{reportFileMastersStore : ReportFileMasters}>,
               private formbuilder : FormBuilder ,
               private store : Store,                
              ){
    
   }

   ngOnInit(){
    console.log(' reportFileMasters Detail component');
    /*
    this.reportFileMastersService.getApiAll().subscribe(
                                       data => this.store.dispatch(reportFileMastersAction.getAll())
                                     );
    */
   }
   
   onSubmit(fromData : any){

      console.log(' REPORT_ID : '+fromData.REPORT_ID);
      console.log(' REPORT_NAME : '+fromData.REPORT_NAME);


      /*
      this.reportFileMastersService.addData(fromData).subscribe(
                                    data => this.store.dispatch(reportFileMastersAction.add(data))
                                    );
      */
   }

  // JSON.stringify(object)
   saveClicked(){
      console.log(' onSaved() '+this.detailForm.value.REPORT_ID);
      const id : string = this.detailForm.value.REPORT_ID as string
         const data : ReportFileMasters = {
                                          REPORT_ID   : this.detailForm.value.REPORT_ID as string ,
                                          REPORT_NAME : this.detailForm.value.REPORT_NAME as string ,
                                          FILENAME    : this.detailForm.value.FILENAME as string ,
                                          REPORT_GROUP  : this.detailForm.value.REPORT_GROUP as string ,
                                          DESCRIPTION   : this.detailForm.value.DESCRIPTION as string ,
                                          FLAG_LOG_FILE : this.detailForm.value.FLAG_LOG_FILE as string ,
                                          ORIENTATION   : this.detailForm.value.ORIENTATION as string ,
                                          PAPER_SIZE   : this.detailForm.value.PAPER_SIZE as string ,
                                          SHOW_FOOTER  : this.detailForm.value.SHOW_FOOTER as string ,
                                          FORM_FOOTER  : this.detailForm.value.FORM_FOOTER as string ,
                                          CTRL_DOC_NUMBER  : this.detailForm.value.CTRL_DOC_NUMBER as string ,
         } ;

      this.store.dispatch(reportFileMastersAction.updateReportFileMasters({id, data}));
      this.detailForm.reset();
   }

   addClicked(){
      console.log(' onSaved() '+this.detailForm.value.REPORT_ID);
      //this.store.dispatch(reportFileMastersAction.newReportFileMasters());
      
         const data : ReportFileMasters = {
                                          REPORT_ID   : this.detailForm.value.REPORT_ID as string ,
                                          REPORT_NAME : this.detailForm.value.REPORT_NAME as string ,
                                          FILENAME    : this.detailForm.value.FILENAME as string ,
                                          REPORT_GROUP  : this.detailForm.value.REPORT_GROUP as string ,
                                          DESCRIPTION   : this.detailForm.value.DESCRIPTION as string ,
                                          FLAG_LOG_FILE : this.detailForm.value.FLAG_LOG_FILE as string ,
                                          ORIENTATION   : this.detailForm.value.ORIENTATION as string ,
                                          PAPER_SIZE   : this.detailForm.value.PAPER_SIZE as string ,
                                          SHOW_FOOTER  : this.detailForm.value.SHOW_FOOTER as string ,
                                          FORM_FOOTER  : this.detailForm.value.FORM_FOOTER as string ,
                                          CTRL_DOC_NUMBER  : this.detailForm.value.CTRL_DOC_NUMBER as string ,
         } ;

      this.store.dispatch(reportFileMastersAction.saveReportFileMasters({data}));
      this.detailForm.reset();

      this.detailForm.reset();
   }
   
   deleteClicked(){
      console.log(' onDelete ');
      this.store.dispatch(reportFileMastersAction.deleteReportFileMasters({id : this.detailForm.value.REPORT_ID as string}));
      this.detailForm.reset();
   }
   
   ngOnChanges( changes : SimpleChanges){
      console.log(' ngOnChange ');
      this.detailForm.setValue(changes['reportFileMaster'].currentValue ?? this.newReportFileMaster)
   }
}