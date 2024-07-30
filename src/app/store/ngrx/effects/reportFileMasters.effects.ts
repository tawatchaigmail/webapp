import {Actions, createEffect,ofType} from '@ngrx/effects'
import {Injectable} from '@angular/core';
import {of, EMPTY, mergeMap } from 'rxjs'
import {map,exhaustMap, catchError} from 'rxjs/operators'; 

import {ReportFileMastersService}   from '../../../service/ngrx/reportFileMasters.service'; 
import {reportFileMastersAction} from  '../actions/reportFileMasters.action';

@Injectable()

export class ReportFileMastersEffect {
     /*
      loadReportFileMasters$ = createEffect(() => 
                   this.actions$.pipe(
                       //   ofType('[Movies Page] Load Movies'),
                       ofType(ReportFileMastersActions.getApiAll),
                       exhaustMap(() => this.reportFileMastersService.getApiAll()
                       .pipe(
                          map((ReportFileMasters) => ReportFileMastersAction.getApiAll({reportFileMastersService})),

                         //  catchError(() => EMPTY)
                         //  catchError(() => of( {type: '[ReportFileMasters API] ReportFileMasters Loaded Error' } ))
                          catchError((error:{message: string}) => of(ReportFileMastersActions.loadFailure({error: error.message })) )
                        )
                       )
                   )
      ) ;

    */

    /*
     this.action$.ofType(CREATE_TASK)
      can be expanded to
     this.action$.filter(action => action.type === CREATE_TASK)
    */

     loadReportFileMasters$ = createEffect(() => this.actions$.pipe(
         ofType(reportFileMastersAction.reportFileMastersLoad),
         mergeMap(() => this.reportFileMastersService.getApiAll()
         .pipe(
             map(datas => reportFileMastersAction.reportFileMastersLoaded({datas})
           ),
           catchError(()=> EMPTY)
           )
         )
       )           
     ) ;

  constructor(
      private actions$: Actions,
      private reportFileMastersService: ReportFileMastersService
                             
   ){}
}