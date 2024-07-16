import {createReducer,on} from '@ngrx/store';
// import {getAll,ad,getById,updateById,deleteById} from '../actions/bicycle.action';
import {reportFileMastersAction} from '../actions/reportFileMasters.action';
import {ReportFileMasters} from '../../../models/ngrx/reportFileMastersInterface';

// import {ReportFileMastersService} from '../../../service/ngrx/reportFileMasters.service';


export const initialState : ReportFileMasters = 
                                         {
                                          reportId       : '0' ,
                                          parameterName  : '' ,
                                          description    : '' ,
                                          rgText         : '' ,
                                         }
         
                                      ;

export const reportFileMastersReducer = createReducer<ReportFileMasters>(
      initialState ,
      on(reportFileMastersAction.getAll, (state) => {
                                 
               return state 
      }),
      
      on(reportFileMastersAction.add, (state, {data}) => {
              return  state ;
      }),

      on(reportFileMastersAction.getById, (state,{id}) => {
              return state ;
      }),

      on(reportFileMastersAction.updateById, (state,{id, data}) => {
              return state ;
      }),

      on(reportFileMastersAction.deleteById, (state,{id}) => {
       return state ;
      }),
      

);