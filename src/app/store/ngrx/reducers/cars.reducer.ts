import {createReducer, on } from '@ngrx/store'
import {EntityState, createEntityAdapter} from '@ngrx/entity';
import {appInit} from '../actions/car.action' ;
import {Car} from '../../../models/ngrx/carInterface'
                                     
export type CarState = EntityState<Car>;

export const carAdapter = createEntityAdapter<Car>({
  selectId: (car) => car.id
});

export const initialState = carAdapter.getInitialState();

export const reducer = createReducer<CarState>(
  initialState,
  on(appInit, (state, {cars}) => carAdapter.addMany(cars, state))  
);