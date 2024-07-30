import {createSelector, createFeatureSelector} from '@ngrx/store';

import {reportFileMastersFeatureKey} from '../../../models/appFeature';
import {ReportFileMasters} from '../../../models/ngrx/reportFileMastersInterface';
import {ReportFileMastersStore} from '../states/reportFileMasters.state';

//export const reportFileMastersSelectFeature = createFeatureSelector<ReportFileMasters[]>(reportFileMastersFeatureKey);

 const reportFileMasterstFeature = createFeatureSelector<ReportFileMastersStore>(reportFileMastersFeatureKey);

 const reportFileMastersSelector = createSelector(
                                            reportFileMasterstFeature,
                                            (state) => {
                                                  return  state ;
                                            }
 );
 
 const reportFileMasters = createSelector(
                                            reportFileMasterstFeature,
                                            (state) => {
                                                  return  state.reportFiles ;
                                            }
 );
 
 const reportFileMastersSelect = createSelector(
                                            reportFileMasterstFeature,
                                            (state) => {
                                                  return  state.reportFileSelect ;
                                            }
 );
 
 const reportFileMastersShowDetail = createSelector(
                                            reportFileMasterstFeature,
                                            (state) => {
                                                  return  state.showDetail ;
                                            }
  );
 

 export const reportFileSelector = {
                                           reportFileMasterstFeature,
                                           reportFileMasters,
                                           reportFileMastersSelect,
                                           reportFileMastersShowDetail,
                                           
 }