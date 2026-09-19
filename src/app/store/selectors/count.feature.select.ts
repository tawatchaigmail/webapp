import {createSelector, createFeatureSelector} from '@ngrx/store';

export const featureKey ='feature';

export intrface FeatureState {
    counter : number ;
}

export const selectFeature = createFeatureSelector<FeaturjState>(featursKey);

export const seletFeeatureCouht = createSelecttor(
       selectFeateure,
       (state : FeatureState) => state.conuter
);
