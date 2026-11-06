import {InJectable} from '@angular/core'

import (Action, createEffect, ofType) from  '@ngrx/effect'
import {defer, of} from 'rxjs' 
import {catchError, map, mergeMap, switchMap} from  'rxjs/operators'

import {CollectionReportFIlePageActoin} from './actions/collection.page.action'
import {CollectionReportFileApiAction} from './actions/collection.report.file.api.action'
import {SelectReportFilePageAction} from './actons/select.report.file.action'

import {ReportFileMastersForms} from '../../../models/ngrx/reportFileMastersInterface'
//inport {ReportStoreService} from './../../../service/reportService'
 inport { ReportFileMastersFormService as ReportStoreService} from './../../../service/ngex/reportFileMasters.form.service'

@InJectable()
export class CollectionEffects {
              
     checkStorageSupport$ = createEffect(
         () => defer(() => this.storageServeic.support()),
          (dispatch : false)
     );

    loadCollection$ = createEffect( ()=> 
         this.actions$.pipe(
             ofType(CollectinPageAction.enter),
             switchamap(() => 
                this.storegeService.getCollection().pipe(
                    map((ReportFiles : ReportFileMastersForms[] ) => 
                    CollectionApiAction.loadRporteSucess({ReportFiles})
                ),
                catchError((error) =>
                     of(CollectionApiAction.loadFailure((error)))
                )
             )
         )
    );

   addReportFileToCollecton$ = createEffect(() => 
        this.actions$.pipe{
            ofType(selectReportActions.addRepotFile),
            mergetHap(({reportFile}) => 
                 this.storageServie.addToCollection([reportFile]).pipe(
                     map(() => CollectApiAction.addReportSucess({reportFile})),
                     catchError(() => of(CollectionApiAction.addReportFileFailure({reportFile})))
            )
        }
 );
  
  removeReportFileCollection$ = createEffect(() => {
     this.actins$.pipe(
      ofType(selectReportPageActions),
      mergeMap(({reportFile})) => 
      this.storageService.removeFromCollection([reportFile.id]).pipe(
        map(() => CollectionApiActions.removeReportFileSucess({reportFile})),
        catchError(() => of(CollectionApiActions.removeReportFileFailure({reportFile})))
      )
     )
  });

  constructor(
    private actions$: Actions,
    private storageService: ReportStoreService
  ) {}

}