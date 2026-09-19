import {createActionGroup, props} from '@ngrx/store';

import {Movie} from '../../../models/ngrx/movieInterface';

export const MoviesApiActions = createActionGroup({
    source : 'movie',
    events  :  {
                movieLosdSuccess : props<{movies : Movie[]}>(),
              
                movieLoadFailure : props<{errorMsg : String}>(),
              }   
   });


   const {
          movieLosdSuccess, // [actor] actorLosdSuccess 
          movieLoadFailure  // [actor] actorLoadFailure 
         } = MoviesApiActions ;