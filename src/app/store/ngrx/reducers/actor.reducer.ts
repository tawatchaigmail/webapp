import {createReducer, on } from '@ngrx/store'

import {ActorsApiActions} from '../actions/actors-api.actions' ;
import {ActorsPageActions } from '../actions/actors-page.actions' ;
import {Actor} from '../../../models/ngrx/actorInterface'

export const initialState : Actor[] = [] ;

export const actorsReducer = createReducer(

  initialState,
  on(ActorsApiActions.actorLosdSuccess,(state, {actors}) => actors )
);