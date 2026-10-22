import {createActinGroup, props} from '@ngrx/store'

export const ViewReportFilePageAction = createActionGroup({
       source : 'view reportFileMasters page',
       events : {
               'select ReportFile' : props<{id: string}>(),
       },
});
