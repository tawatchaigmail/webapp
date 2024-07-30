import {Component, OnInit} from '@angular/core';
import {CommonModule,Location} from '@angular/common';
import {FormsModule,ReactiveFormsModule ,Validators,ControlContainer,FormGroup,FormControl,NgForm} from '@angular/forms';
import {Store} from '@ngrx/store';

import { Observable } from 'rxjs';

import {ReportFileMasters} from '../../../../models/ngrx/reportFileMastersInterface'; 
import {ReportFileMastersService} from '../../../../service/ngrx/reportFileMasters.service';
import {reportFileMastersAction} from '../../../../store/ngrx/actions/reportFileMasters.action';

import {reportFileMastersSelector} from '../../../../store/ngrx/selector/reportFileMasters.selector';

@Component({
           selector : 'ngx-repfilmas-det',
           templateUrl : './reportFileMasterDetail.component.html',
           styleUrls : ['./reportFileMasterDetail.component.scss'],
           standalone: true,
           /*
           imports : [
                      CommonModule,
                      FormsModule
                     ],
           */
})

export class ReportFileMastersComponent implements OnInit {
 

  reportFileMasters$ :   Observable<ReportFileMasters[]> = this.store.select(reportFileMastersSelector) ;

   constructor(
//               private store : Store<{reportFileMastersStore : ReportFileMasters}>,
               private store : Store,
               private reportFileMastersService : ReportFileMastersService 
              ){
    
   }

   ngOnInit(){
    console.log('reportFileMasters component');
    
    this.reportFileMastersService.getApiAll().subscribe(
                                       data => this.store.dispatch(reportFileMastersAction.getAll())
                                     );
   }
   
   onSubmit(fromData : any){

      console.log(fromData.reportId);
      console.log(fromData.parameterNameId);
      console.log(fromData.descriptionId);
      console.log(fromData.rgTextId);
      /*
      this.reportFileMastersService.addData(fromData).subscribe(
                                    data => this.store.dispatch(reportFileMastersAction.add(data))
                                    );
       */
   }

   onClearForm(){
   }
}