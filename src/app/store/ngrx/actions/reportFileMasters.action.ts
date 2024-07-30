import {createActionGroup, createAction, emptyProps, props} from '@ngrx/store';
import {ReportFileMasters} from '../../../models/ngrx/reportFileMastersInterface';

export const reportFileMastersAction = createActionGroup({
  source : 'reportFileMastersActionGroup',
  events : {

            reportFileMastersLoad   : emptyProps(), 
   //         reportFileMastersLoaded : props<{datas : ReadonlyArray<ReportFileMasters>}> (),
            reportFileMastersLoaded : props<{datas : ReportFileMasters[]}> (),

            showReportFileMasters : props<{data : ReportFileMasters}> (),
            newReportFileMasters  : emptyProps(),

            saveReportFileMasters : props<{data : ReportFileMasters}> (),
            reportFileMastersSave : props<{data : ReportFileMasters}> (),

            deleteReportFileMasters  : props<{id : string}> () ,
            reportFileMastersDeleted : props<{data : ReportFileMasters}> (),
            
            dismiss : emptyProps() 
           },
}) ;
