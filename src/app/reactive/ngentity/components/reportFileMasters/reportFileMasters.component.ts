import {Component, OnInit} from '@angular/core';
import {CommonModule,Location} from '@angular/common';
import {FormsModule,ReactiveFormsModule ,Validators,ControlContainer,FormGroup,FormControl,NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';
import { Observable } from 'rxjs';
import { RouterLink, RouterOutlet } from '@angular/router';

import {ReportFileMasters} from '../../../../models/ngrx/reportFileMastersInterface'; 
import {ReportFileMastersService} from '../../../../service/ngrx/reportFileMasters.service';
import {reportFileMastersAction} from '../../../../store/ngrx/actions/reportFileMasters.action';

import {reportFileSelector} from '../../../../store/ngrx/selector/reportFileMasters.selector';

import {ReportFileMasterDetailsComponent} from '../reportFileMasterDetail/reportFileMasterDetail.component';
import {ReportFileParametersComponent} from    '../reportFileParameters/reportFileParameters.component';        

@Component({
           selector : 'ngx-repfilmas',
           templateUrl : './reportFileMasters.component.html',
           styleUrls : ['./reportFileMasters.component.scss'],
           standalone: true,
           imports : [
                      CommonModule,
                      FormsModule,
                      RouterLink, 
                      RouterOutlet,
                      ReportFileMasterDetailsComponent,
                      ReportFileParametersComponent
                     ],
})

export class ReportFileMastersComponent implements OnInit {
 

//  reportFileMasters$ :   Observable<ReportFileMasters[]> = this.store.select(reportFileSelector.reportFileMasters) ;   
  reportFileMasters$ :   ReportFileMasters[] | undefined = [] ;   
  reportFileMaster? : ReportFileMasters ;
  selectReportFileMaster? : ReportFileMasters ; 
  showDetail = false;

// .reportFileStore.reportFiles
//  reportFileMasters$ :   Observable<ReadonlyArray<ReportFileMasters>> = this.store.select(reportFileSelector.reportFileMasters) ;

   constructor(
//               private store : Store<{reportFileMastersStore : ReportFileMasters}>,
               private store : Store,
               private reportFileMastersService : ReportFileMastersService 
              ){
    
   }

   ngOnInit(){

    console.log('reportFileMasters component');

    this.onLoadAll();

    this.store.select(reportFileSelector.reportFileMasters).subscribe(data => this.reportFileMasters$ = data );
    this.store.select(reportFileSelector.reportFileMastersSelect).subscribe(datas => this.selectReportFileMaster = datas);
    this.store.select(reportFileSelector.reportFileMastersShowDetail).subscribe( showDetail => {
                                                                                                  this.showDetail = showDetail;
                                                                                                 // showDetail ? this.showPopup() : this.hidePopup();
                                                                                               }
    );

    /*    
    this.reportFileMastersService.getApiAll().subscribe(
                                       data => this.store.dispatch(reportFileMastersAction.reportFileMastersLoad())
                                     );
    */
    /*
                      ReportFileMasters : [
                                            {
                                             REPORT_ID   : '0' ,
                                             REPORT_NAME : '0' ,
                                             FILENAME    : '0' ,
                                             REPORT_GROUP  : '0' ,
                                             DESCRIPTION   : '0' ,
                                             FLAG_LOG_FILE : '0' ,
                                             ORIENTATION   : '0' ,
                                             PAPER_SIZE   : '0' ,
                                             SHOW_FOOTER  : '0' ,
                                             FORM_FOOTER  : '0' ,
                                             CTRL_DOC_NUMBER  : '0' ,
                                            },
                                          ]
    */
   }
   
   onLoadAll(){
     this.store.dispatch(reportFileMastersAction.reportFileMastersLoad()) ;   
     
   }   

   onSubmit(fromData : any){
     console.log(' onSubmit ');
       //  this.store.dispatch(reportFileMastersAction.saveReportFileMasters(fromData));
   }

   onAddData(){
         console.log(' onAddData ');
         
         const data : ReportFileMasters = {
                                          REPORT_ID   : '1' ,
                                          REPORT_NAME : '1' ,
                                          FILENAME    : '1' ,
                                          REPORT_GROUP  : '1' ,
                                          DESCRIPTION   : '1' ,
                                          FLAG_LOG_FILE : '1' ,
                                          ORIENTATION   : '1' ,
                                          PAPER_SIZE   : '1' ,
                                          SHOW_FOOTER  : '1' ,
                                          FORM_FOOTER  : '1' ,
                                          CTRL_DOC_NUMBER  : '1' ,
         } ;




    //     this.store.dispatch(reportFileMastersAction.saveReportFileMasters({data}));
         this.store.dispatch(reportFileMastersAction.newReportFileMasters());
           
   }

   onShowData(data : any){
      console.log(' onShowData REPORT_ID : '+data.REPORT_ID);
      console.log(' onShowData REPORT_NAME : '+data.REPORT_NAME);
      this.store.dispatch(reportFileMastersAction.showReportFileMasters({data}));
   }
}