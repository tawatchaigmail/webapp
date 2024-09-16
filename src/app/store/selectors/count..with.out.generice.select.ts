
app.component.ts

export class AppComponent {
  counter$ = this.store.select(fromCounter.selectCounter);

  constructor(private readonly store: Store) {}
}


//////////////////////////////////////

selector 


import { createSelector, createFeatureSelector } from '@ngrx/store';

export const featureKey = 'feature';

export interface FeatureState {
  counter: number;
}

// selectFeature will have the type MemoizedSelector<object, FeatureState>
export const selectFeature = createFeatureSelector<FeatureState>(featureKey);

// selectFeatureCount will have the type MemoizedSelector<object, number>
export const selectFeatureCount = createSelector(
  selectFeature,
  state => state.counter
);