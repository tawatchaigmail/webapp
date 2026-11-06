import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity'
import {createReducer,on} from '@ngrx/store' 

import {ReportFileAction} from './actions/report.file.action'
import {ReportFileApiAction} from './actions/report.file.api.action'
import {CollectionReportFileApiAction} from './actions/collection.report.file.api.action';
import {ViewBookPageAction} from './actions/view.report.file.action'

import {ReportFileMastersForms} from '../../../models/ngrx/reportFileMastersInterface'

export const reportFileFeaturekey ='reportFile'

export interface state extend EntityState<ReportFileMastersForms> {
        selectReportFileReportId : string | null;
}

export const adapter : EntityAdapter = createEntityAdapter<ReportFileMastersForms>({
     selectId : (reportFile : ReportFileMastersForms) => reportFile.reportId,
     sortComparer : false,
})

export const initialState State = adapter.getInitialstate({
     selectReportFileReportId : null;
})

export const reportFileReducer = createReducer({
   initialState,
   on(
     ReportFileApiAction.searchSuccess,
     CollectionReportFileApiAction.loadReportFileSuccess,     
     (state, (ReportFileMastersForms)) => adapter.addMany(reportFileMastersForms, State)
     ),
   on(
      ReportFileAction.loadReportFile, (state, {reportFileMastersForm}) => adapter.addOne(reportFileMastersForm, State)
   ),
   on (
      ViewBookPageAction.selectreportFile, (state, {id}) =>  ({
      ...state,
       selectReportFileReportId : id
       })
     )   
})

export const selectId = (state : State) => state.selectReportFileReportId;
                                                 