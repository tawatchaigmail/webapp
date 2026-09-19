import {createActionGroup, props} from '@ngrx/store';

export const ActorsPageActions = createActionGroup({
    source : 'actor',
    events  :  {
                opened : props<{actorId : string}>()
               }   
});