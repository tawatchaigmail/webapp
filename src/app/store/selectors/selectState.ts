import {createSelector,  createFeatureSelector ,MemoizedSelector} from '@ngrx/store';
import {UserState} from '../../models/stateInterface' ;
import {User} from '../../models/userInterface';

interface AppUserState  { users : User[] } ;
 export const userFeatureSelect  =   createFeatureSelector<ReadonlyArray<User>>('User') ;
// export const authFeatureSelect  =  (userState : AppUserState) => userState.users ;
// export const authFeatureSelect  =  (featureName : any) : MemoizedSelector <any, any> ;

// export const selectCollectionState = createFeatureSelector<ReadonlyArray<string>>('collection');

export const getAuthUser = createSelector(
//    authFeatureSelect,
//    userFeatureSelect,
    (state : UserState) => state.user
);
 
export const getAuthLoading = createSelector(
//     authFeatureSelect,
//       userFeatureSelect,
     (state : UserState) => state.loading
);

export const getAuthError = createSelector(
//      authFeatureSelect,
//      userFeatureSelect,
      (state : UserState) => state.error
);