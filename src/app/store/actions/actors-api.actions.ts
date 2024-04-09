import {createActionGroup, props} from '@ngrx/store';

import {Actor} from '../../models/actorInterface';

export const ActorsApiActions = createActionGroup({
    source : 'actor',
    events  :  {
               // actorLosdSuccess : props<{actors : Actor[]}>(),
                actorLosdSuccess : props<{actors : any}>(),
                actorLoadFailure : props<{errorMsg : String}>(),
              }   
   });