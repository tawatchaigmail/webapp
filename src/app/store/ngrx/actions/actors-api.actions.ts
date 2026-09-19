import {createActionGroup, props} from '@ngrx/store';

import {Actor} from '../../../models/ngrx/actorInterface';

export const ActorsApiActions = createActionGroup({
    source : 'actor',
    events  :  {
                actorLosdSuccess : props<{actors : Actor[]}>(),
              //  actorLosdSuccess : props<{actors : any}>(),
                actorLoadFailure : props<{errorMsg : String}>(),
              }   
   });


   const {
          actorLosdSuccess, // [actor] actorLosdSuccess 
          actorLoadFailure  // [actor] actorLoadFailure 
         } = ActorsApiActions ;