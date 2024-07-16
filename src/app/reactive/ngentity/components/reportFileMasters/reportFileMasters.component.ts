import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import { Observable } from 'rxjs';

import {ReportFileMasters} from '../../../../models/ngrx/reportFileMastersInterface'; 
import {ReportFileMastersService} from '../../../../service/ngrx/reportFileMasters.service';
import {reportFileMastersAction} from '../../../../store/ngrx/actions/reportFileMasters.action';

import {reportFileMastersSelector} from '../../../../store/ngrx/selector/reportFileMasters.selector';

@Component({
           selector : 'ngx-repfilmas',
           templateUrl : './reportFileMasters.component.html',
           styleUrls : ['./reportFileMasters.component.scss']
})

export class ReportFileMastersComponent implements OnInit {
 

  bicycle$ :   Observable<ReportFileMasters> = this.store.select(reportFileMastersSelector) ;

   constructor(
//               private store : Store<{bicycleStore : ReportFileMasters}>,
               private store : Store,
               private reportFileMastersService : ReportFileMastersService 
              ){
    
   }

   ngOnInit(){
    console.log('bicycle componett');
    
    this.reportFileMastersService.getApiAll().subscribe(
                                       bicycle => this.store.dispatch(reportFileMastersAction.getAll())
                                     );
    
   }
}