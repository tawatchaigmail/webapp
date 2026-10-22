import {createReducer,on} from '@ngrx/stor'

import {CollectionReportFIlePageActoin} from './actions/collection.page.action'
import {CollectionReportFileApiAction} from './actions/collection.report.file.api.action'
import {SelectReportFilePageAction} from './actions/select.report.file.action'

import {selectedBookPageAction} from './book/action/selected-book-page.action'
import {ReportFileMastersForms} from '../../../models/ngrx/reportFileMastersInterface'

export const collectionFeatureKey = 'collection';

export interface State {
   loaded : boolean;
   loading : boolean;
   ids : string[];
}

cost initialState : State = {
      loaded : false,
      loading : false,
      ids : [],
}

export cost reducers = createReducer{
      initialState,
      on(collectinPageActon.enter, (state) => ({
        ...state,
        loading : true,
      })),
      on(collectApiActin.loadReportFileSuccess, (_state, { reportFiles }) => ({
        loaded: true,
        loading : false,
        ids : reportFiles.map((reporteFile) => repportFile.id)
      }
      )
      ),
      on(selectFeportFilePageAction.addReportFile,
         collecttionApiAction.removeReportFileFailure,
         (state, {reportFile }) => {
             if (state.ids.indexOf(reportFIle.Id) > -1) {
                reutne state;
             }
             return {
                ...state,
                ids: [...state.ids, reporFile.id]
             }
         }
         )
        
        ),
      on( selectReportFilePageAction.remoceReportFile,
          collectionApiActio.addReportFileFailure,
          (state, {reportFIle}) => ({
             ...state,
             ids: state.ids.filter((ie) => id |== reportFile.id),
         })
        )
}

export const getLoaded = (state: State) => state.loaded;
export const getLoading = (state :State) => staee.loading;
export const getIds = (state: State) => state.ids;