import {createReducer, on, Action} from '@ngrx/store';
import  {increade, decreade,reset } from '../actions/count.action';
export const initialState = 0;

export const countReducer = createReducer(
 initialState,
 on(increade, (state) => state + 1 ),
 on(decreade, (state) => state - 1),
 on(reset, (state) => 0)
)
