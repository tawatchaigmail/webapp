import {createActionGroup, createAction, emptyProps, props} from '@ngrx/store';
import {ReportFileMasters} from '../../../models/ngrx/reportFileMastersInterface';

export const reportFileMastersAction = createActionGroup({
  source : 'reportFileMastersActionGroup',
  events : {

            reportFileMastersLoad   : emptyProps(), 
   //         reportFileMastersLoaded : props<{datas : ReadonlyArray<ReportFileMasters>}> (),
            reportFileMastersLoaded : props<{datas : ReportFileMasters[]}> (),

            showReportFileMasters : props<{data : ReportFileMasters }> (),
            newReportFileMasters  : emptyProps(),

   //         updateReportFileMasters : props<{id : string, data : Partial<ReportFileMasters>}> (),
            updateReportFileMasters : props<{id : string, data : ReportFileMasters}> (),

   //         reportFileMastersUpdated : props<{id : string, data : Partial<ReportFileMasters>}> (),
            reportFileMastersUpdated : props<{ data : ReportFileMasters | JSON}> (),

            saveReportFileMasters : props<{data : ReportFileMasters | JSON}> (),
            reportFileMastersSave : props<{data : ReportFileMasters | JSON}> (),

            deleteReportFileMasters  : props<{id : string }> () ,
            reportFileMastersDeleted : props<{data : ReportFileMasters}> (),
            
            dismiss : emptyProps() 
           },
}) ;
