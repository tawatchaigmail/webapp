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
     const myObject = {
                      hello: 'how are you',
                      hey: 'i am fine thank you'
     }

     type myObjectType = keyof typeof MyObject


     this.action$.ofType(CREATE_TASK)
      can be expanded to
     this.action$.filter(action => action.type === CREATE_TASK)

     var a = [1,2,3]; 
     var b = a.map(
     function(x){
        return x*2; 
                }
     );
     // b = [2,4,6];
     var b = a.map( x => x*2 );

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
     );

     saveReportFileMasters$ = createEffect(() => this.actions$.pipe(
         ofType(reportFileMastersAction.saveReportFileMasters), 
         mergeMap((action) => this.reportFileMastersService.addData(action.data)
         .pipe(
               map(data => reportFileMastersAction.reportFileMastersSave({data})
              ),
               catchError(() => EMPTY)
           )
         )
       )
     );

     reportFileMastersSave$ = createEffect(() => this.actions$.pipe(
         ofType(reportFileMastersAction.reportFileMastersSave), 
         map(() => reportFileMastersAction.reportFileMastersLoad())
       )
     );

     updateReportFileMasters$ = createEffect(() => this.actions$.pipe(
         ofType(reportFileMastersAction.updateReportFileMasters), 
         mergeMap((action) => this.reportFileMastersService.updateData(action.id, action.data)
         .pipe(
              // map(({id, data}) => reportFileMastersAction.reportFileMastersUpdated({id, data})
              map((data) => reportFileMastersAction.reportFileMastersUpdated({data})
              ),
               catchError(() => EMPTY)
           )
         )
       )
     );

     deleteReportFileMasters$ = createEffect(() => this.actions$.pipe(
         ofType(reportFileMastersAction.deleteReportFileMasters),
         mergeMap((action) => this.reportFileMastersService.removeData(action.id)
                   
         .pipe(
               map(data => reportFileMastersAction.reportFileMastersDeleted({data})
               ),
               catchError(() => EMPTY)   
           ) 
         )
       )
     );

     reportFileMastersDelete$ = createEffect(() => this.actions$.pipe(
         ofType(reportFileMastersAction.reportFileMastersDeleted),
         map(data => reportFileMastersAction.reportFileMastersLoad())
       )
     );


  constructor(
      private actions$: Actions,
      private reportFileMastersService: ReportFileMastersService
                             
   ){}
}