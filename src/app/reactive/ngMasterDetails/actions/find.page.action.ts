import {createActionGroup, emptyProps} from '@ngrx/store'

export const FindProjectMastersPageAction = createActionGroup({
      source : 'Find ProjectMasters Page',
      events : {
          'Sesrch ProjectMaster' : props<{ query : string}>(),
      },
});
