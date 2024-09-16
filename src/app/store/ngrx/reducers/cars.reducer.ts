import {createReducer, Action, on } from '@ngrx/store'
import {EntityState, createEntityAdapter} from '@ngrx/entity';

import {appInit} from '../actions/car.action' ;
import {Car} from '../../../models/ngrx/carInterface'


//export const carFeatureKey = 'carsFeature'; 

export type CarState = EntityState<Car>;

export const carAdapter = createEntityAdapter<Car>({
  selectId: (car) => {
                    //  console.log('createEntityAdapter');  
                    //  console.log('car.id :'+car.id);
                    //  console.log(car);
                      return car.id 
                     }
});

export const initialState = carAdapter.getInitialState();

 //export const carReducer = createReducer<CarState>(
export const carReducer = createReducer(
  initialState,
//  on(appInit, (state, {cars}) => carAdapter.addMany(cars, state))  
  on(appInit, (state, {cars}) => {
                                       //   console.log( ' state :'+ state + ' cars :' + cars);
                                       //   console.log(state);
                                       //   console.log(cars);

                                  return  carAdapter.addMany(cars, state)
                                }
    )  
);