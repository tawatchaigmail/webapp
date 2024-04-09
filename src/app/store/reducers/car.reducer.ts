import {createReducer, on } from '@ngrx/store'
import {EntityState, createEntityAdapter} from '@ngrx/entity';
import {appInit} from './car.actions' ;

export interface Car {
  id: string;
  year: string;
  make: string;
  model: string;
}

export type CarState = EntityState<Car>;

export const carAdapter = createEntityAdapter<Car>({
  selectId: (Car) => car.id
});

export const carAdapter.getInitialState();


export const reducer = createReducer<CarState>(
  initialState,
  on(appinit, (state, {car}) => carAdpter.addMany(cars,state))

);