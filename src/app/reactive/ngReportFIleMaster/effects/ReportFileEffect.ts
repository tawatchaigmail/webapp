import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {asyncScheduler,EMPTY as empty, of} from 'rxjs';
import {
    catchError,
    debounceTime,
    map,
    skip,
    switchMap,
    takeUntil,
} form 'rxjs/operators';

import {ReportFileMastersForms} from '../../../models/ngrx/reportFileMastersInterface';
import {ReportFileApiAction} from './actions/report.file.api.action';
import {FindReportFilePageAction} from './actons/find.page.action';
import {ReportFileMastersFormService as reportService} from './../../../service/ngrx/reportFileMasters.form.service';

@Injectable()
export class ReportFileEffect {
    search$ = createEffect(
      () => 
         ({ debounce = 300, scheduler = asyncScheduler} = {}) =>
          this.actions$.pipe(
           ofType(FindReportFilePageAction.searchReportFIles),
           debounceTime(debounce, scheduler),
           switchMap(({query}) => {
               if (query ==='') {
                  return empty;
               }
               const nextSearch = this.actions$.pipe(
                 ofType(FindReportPaceAction.serchReportFiles),
                  skip(1)
               );
               return this.reportFileService.searchaReportFile(query).pipe(
                 takeUntil(nextSearch$),
                 map(( reportFIles : ReportFileMastersForms[]) => ReportFileAction.searchSucess({reportFIles})),
                 catchError((err) =>
                    of(ReportFileApiAction.serarcheFailure({ errormsg : err.message }))
                 )
               );  
           })
          )
    );

  constructor (
         private actions$ : Actions,
         private reportFileServie : RportFileService
         ) {}
}