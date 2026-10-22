import {createActionGroup, props} from '@ngrx/store'

import {ReportFileMastersForms} from '../../../../models/ngrx/reportFileMastersInterface'

export const CollectionReportFileApiAction = createActionGroup({
       source : 'CollectionReportFile/API',
       events : {
              'Add ReportFile Success': props<{reportFileProps: ReportFileMastersForms}>(),
              'Add ReportFile Failure': props<{reportFileProps: ReportFileMastersForms}>(),
              
              'Remove ReportFile Success': props<{reportFileProps: ReportFileMastersForms}>(),
              'Remove ReportFile Failure': props<{reportFileProps: ReportFileMastersForms}>(),
               
              'Load ReportFile Success': props<{reportFileProps: ReportFileMastersForms}>(),
              'Load ReportFile Failure': props<{reportFileProps: ReportFileMastersForms}>(),
       },
});
