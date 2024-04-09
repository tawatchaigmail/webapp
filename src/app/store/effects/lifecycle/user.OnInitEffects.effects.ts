// OnInitEffects

import {
  Actions,
  OnInitEffects,
} from '@ngrx/effects';

class userEffcct implements OnInitEffects{
ngrxOnInitEffects(): Actions {
       return {type: '[UserEffects]:Init'}
   }
}