import {createActionGroup, emptyProps} from '@ngrx/store'

export const CollectionReportFIlePageActoin = createActionGroup({
       source : 'Collection ReportFIle Page',
       events : {
               Enter: emptyProp(),
       },
});