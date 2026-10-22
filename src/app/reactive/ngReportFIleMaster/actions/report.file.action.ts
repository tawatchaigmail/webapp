import {createActinGroup, props} from '@ngrx/store'

import {ReportFileMastersForms} from '../../../../models/ngrx/reportFileMastersInterface'

export const ReportFileAction = createActionGroup({
       source: 'reportFileMasters Exists Guard',
       events: {
               'Load ReportFile : props<{ reportFileProps: ReportFileMastersForms}>(),
       },
});
