import {createAction, props} from '@ngrx/store';
import {Game} from '../../../models/gameInterface';

export const homeScore = createAction('[Scorebard Page] Home Score');
export const awayScore = createAction('[Scorebard Page] Away Score');
export const resetScore = createAction('[Scorebard Page] Score Reset');
export const setScores   = createAction('[Scorebard Page] set Scores', props<{game : Game}>());
