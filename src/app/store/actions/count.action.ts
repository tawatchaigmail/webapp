import {createAction, props} from '@ngrx/store' ;

export const increade = createAction('[counter] increade');
export const decreade = createAction('[counter] decreade');
export const reset    = createAction('[counter] reset');