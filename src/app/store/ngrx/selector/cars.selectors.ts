import {createFeatureSelector, createSelector} from '@ngrx/store';
import {selectRouteParams} from '../ngrx-router/router.selectors';

import {carAdapter, CarState} from '../reducers/cars.reducer';
import {carsFeatureKey} from '../../../models/appFeature';

export const carFeatureSelector = createFeatureSelector<CarState>(carsFeatureKey);

const {
        selectEntities, 
        selectAll 
      }  = carAdapter.getSelectors() ;

export const selectCarEntities = createSelector(
       carFeatureSelector,
       selectEntities
  );

export const selectCars = createSelector( 
                                     carFeatureSelector, 
                                     selectAll
                          );

// you can combine the `selectRouteParams` with `selectCarEntities`
// to get a selector for the active car for this component based
// on the route

export const selectCar = createSelector(
       selectCarEntities,
       selectRouteParams,
       (cars, {carId}) => {
                          console.log('carId : '+carId);
                          return cars[carId] 
                          }      
 );
