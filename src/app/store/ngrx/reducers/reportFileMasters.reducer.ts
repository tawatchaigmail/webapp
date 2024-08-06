import {createReducer,on} from '@ngrx/store';

import {reportFileMastersAction} from '../actions/reportFileMasters.action';
import {ReportFileMasters} from '../../../models/ngrx/reportFileMastersInterface';
import {ReportFileMastersStore} from '../states/reportFileMasters.state';
// import {ReportFileMastersService} from '../../../service/ngrx/reportFileMasters.service';

//undefined

export const initialState : ReportFileMastersStore = {
                                                      reportFiles : [], 
                                                      reportFileSelect : {
                                                                          REPORT_ID  : '0' ,
                                                                          REPORT_NAME  : 'reportName' ,
                                                                          FILENAME  : 'filename' ,
                                                                          REPORT_GROUP  : '0' ,
                                                                          DESCRIPTION  : 'description' ,
                                                                          FLAG_LOG_FILE  : '' ,
                                                                          ORIENTATION  : '' ,
                                                                          PAPER_SIZE  : '' ,
                                                                          SHOW_FOOTER  : '' ,
                                                                          FORM_FOOTER  : '' ,
                                                                          CTRL_DOC_NUMBER  : '' ,
                                                                        } ,
                                                      showDetail : false
                                                                         }
                                                    
                                      ;

export const reportFileMastersReducer = createReducer(
      initialState ,
      on(reportFileMastersAction.reportFileMastersLoaded, (state, {datas}) => ({
        ...state,                         
        reportFiles : datas 
      })),
      
      on(reportFileMastersAction.showReportFileMasters, (state, {data}) => ({
         ...state,
         reportFileSelect :  data, 
         showDetail : true   
      })),

      on(reportFileMastersAction.newReportFileMasters, (state) => ({
         ...state ,
         reportFoleSelect  : undefined,
         shoeDetail : true
      })),
      
      on(reportFileMastersAction.reportFileMastersSave, (state, {data}) => ({
         ...state ,
         reportselect : undefined ,
         showDetail : false
      })),
      /* 
      on(reportFileMastersAction.reportFileMastersUpdated, (state, {data}) => ({
         ...state ,
         reportselect : data ,
         showDetail : true
      })),
      */ 
      on(reportFileMastersAction.reportFileMastersDeleted, (state, {data}) => ({
        ...state ,
         reportselect : undefined,
         showDetail : false
      })),
      
 
      on(reportFileMastersAction.deleteReportFileMasters, (state) => ({
        ...state ,
         reportselect : undefined,
         showDetail : false
      })),
 
);