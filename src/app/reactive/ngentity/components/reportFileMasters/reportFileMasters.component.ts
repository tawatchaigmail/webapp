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
        

@Component({
           selector : 'ngx-repfilmas',
           templateUrl : './reportFileMasters.component.html',
           styleUrls : ['./reportFileMasters.component.scss'],
           standalone: true,
           imports : [
                      CommonModule,
                      FormsModule,
                      RouterLink, 
                      RouterOutlet
                     ],
})

export class ReportFileMastersComponent implements OnInit {
 

  reportFileMasters$ :   Observable<ReportFileMasters[]> = this.store.select(reportFileSelector.reportFileMasters) ;   
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

  //  this.store.select(Selector.datas).subscribe(datas => this.datas$ = datas);


    /*    
    this.reportFileMastersService.getApiAll().subscribe(
                                       data => this.store.dispatch(reportFileMastersAction.reportFileMastersLoad())
                                     );
    */
                      /*
                      ReportFileMasters : [
                                            {reportId : '', parameterName : '',  description : '', rgText : ''  },
                                          ]
                      */
   }
   
   onSubmit(fromData : any){
   }

   onAddData(){
         console.log(' onAddData ');

   }

   onClearForm(){
   }
}