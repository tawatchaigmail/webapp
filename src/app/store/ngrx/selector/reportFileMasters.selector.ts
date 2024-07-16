import {createSelector, createFeatureSelector} from '@ngrx/store';

import {reportFileMastersFeatureKey} from '../../../models/appFeature';
import {ReportFileMasters} from '../../../models/ngrx/reportFileMastersInterface';

export const reportFileMastersSelectFeature = createFeatureSelector<ReportFileMasters>(reportFileMastersFeatureKey);

export const reportFileMastersSelector = createSelector(
                                            reportFileMastersSelectFeature,
                                            (bicycle) => {
                                                  return  bicycle ;
                                            }
);