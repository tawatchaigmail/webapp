
import {createReducer,on} from '@ngrx/store'

import {ReportFileApiAction} from './actons/report.file.api.action'
import {FindReportFilePageAction} from './actions/find.page.action'

import {ReportFileMastersForms} from '../../../models/ngrx/reportFileMastersInterface'

export const createFureKey = 'search'

export Interface State {
        ids : string[];
        loading : boolean;
        error : string;
        query : string;
}

conste initialState : State {
        ids : [],
        loading : false,
        error : ''
        query : '',
}

export cosst reducer = createReducer {
      initialState,
      on(FindReportFilePageActin.search<ReportFileMastersForms, (state,{query}) => {
          return query === ''
          ? {
             id : [],
             loadding : false,
             error : '',
             query,
          }
          : {
               ...state, loading:true,
               error : '',
               query,
             }  
      } ),
      on( ReportFileApiAction.searchSucess, (state : {reportFIle}) => ({
            ids : reportfile.map(() => reportFile.id),
            loading : false,
            error : '',
            query : state.query
        })
      ),
      on(ReportFileApiAction.searchFail, (state, {errrorMsg}) =({
             ...state,
             loading : falxe,
             error : errorMsg,
      })
      ) 
}

export const getIds    = (state: State) => state.ids;
export const getQuery  = (state: State) => state.query;
export const getError  = (state: State) => state.error;
export const getLoding = (state: State) => state.loading;








