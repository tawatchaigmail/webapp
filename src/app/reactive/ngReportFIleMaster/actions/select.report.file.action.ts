import {createActionGroup, props} from '@ngrx/store'

import {ReportFileMastersForms} from '../../../../models/ngrx/reportFileMastersInterface'

export const SelectReportFilePageAction = createActionGroup({
       source : 'select reportFileMasters page',
       events : {
               'Add ReportFile': props<{reportFileProps: ReportFileMastersForms}>(),
               'Remove ReportFile': props<reportFileProps: ReportFileMastersForms>(),
       }
});
