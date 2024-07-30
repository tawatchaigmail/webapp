import {createReducer,on} from '@ngrx/store';

import {reportFileMastersAction} from '../actions/reportFileMasters.action';
import {ReportFileMasters} from '../../../models/ngrx/reportFileMastersInterface';
import {ReportFileMastersStore} from '../states/reportFileMasters.state';
// import {ReportFileMastersService} from '../../../service/ngrx/reportFileMasters.service';

//undefined

export const initialState : ReportFileMastersStore = {
                                                   
                                                                         reportFiles : [], 
                                                                         reportFileSelect : {
                                                                                              reportId       : '0' ,
                                                                                              parameterName  : '' ,
                                                                                              description    : '' ,
                                                                                              rgText         : '' ,
                                               
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
       
      on(reportFileMastersAction.reportFileMastersDeleted, (state, {data}) => ({
        ...state ,
         reportselect : undefined,
         showDetail : false
      })),
      
      on(reportFileMastersAction.reportFileMastersDeleted, (state => ({
        ...state ,
         reportselect : undefined,
         showDetail : false
      }))),


);