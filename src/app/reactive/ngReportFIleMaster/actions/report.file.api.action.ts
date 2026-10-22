import {createActionGroup, props} from '@ngrx/store'

import {ReportFileMastersForms} from '../../../../models/ngrx/reportFileMastersInterface'

export const ReportFileApiAction = createActionGroup({
       source : 'reportFile/API',
       events : {
                'Search Success': props<{ reportFileProps: ReportFileMastersForms[]}>(),
                'Search Failure': props<{ errorMsg: String}>(),
       },
});
