import {createAction, props} from '@ngrx/store'
import {Car} from '../../../models/ngrx/carInterface'

export const appInit = createAction('[App] Init', props<{cars: Car[] }>());
