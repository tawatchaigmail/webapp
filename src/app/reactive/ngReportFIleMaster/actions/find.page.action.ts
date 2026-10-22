import {createActionGroup, emptyProps} from '@ngrx/store'

export const FindReportFilePageAction = createActionGroup({
      source : 'Find ReportFile Page',
      events : {
          'Sesrch ReportFiles' : props<{ query : string}>(),
      },
});
