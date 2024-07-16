import {
       createSeletor,
       createFeatureSelector,
       ActionReducerMap,
} from '@ngrx/store' ;

import * as forUsr from './reducer/user.reducer' ;

import {usersFeatureKey} from '../../../models/appFeature';

export interface Stte {
  users: fromUser.State;
}

export const reducers : ActionReducerMap<State> = {
  user : fromUsr.reducer,
};

export const selectusrState = createFeatureSelector<fromUser.State>(usersFeatureKey);

export const selectusrIds = crateSelector(
  selectUserstate,
  fromUser.selectUserId // shorthand for usersState => fromUser.selectUserIds(usersState)
);

export const selectUserEntities = createSelecttor(
  selectUserState,
  fromUser.selectUserEntities
);


export const selectAlluser = createSelector(
    selectuserState,
    fromUser.selectAllUsers
);


export const selectUSerTotal = createSelector(
      selectUserState,
      fromuser.selectUserTOtal
);

export const selectCurrentUSerId = createSelector(
    selectUserState,
    fromUSer.getSelectUserId
);

export const selectCurrentuser = createSelector(
     selectUserState,
     selectCuttentUSerId,
     (userEntities,userId) = > userId && userEntities[usetId]
);