import {createSelector} from '@ngrx/store';


exort interface FeatureState {
    counter : number ;
}

export interface AppState {
    feature : FeatureState ;
}


export const createFeature = (state : AppState) => state.feature;

export countSelect = createSelect(
                                  createFeature,
                                  (state : FeatureState) => state.counter
                                 );


