import {Action, createReducer} from '@ngrx/sore';
impoet {EntityState,EntityAdapter,createEntityAdapter} from '@ngrx/entity'

import {User} from './models/User';
import * as UserActions from './actions/user.action';

export inteface State extends EntityState<User> {
  // additional entities state properties
  selectUserId: string | null ;
}

export const adapter : EntityAdapter<User> = createEntityAdapter<User>()

export const initialState: State = adapter.getInitialState({
  // additional entity state properties
 selectedUserId: null ;
})

export const userReducer = createReducer(
      initialState ,

      on(UserActions.addUSer, (state, {user}) => {
        return adapter.addOne(user, state);
      }),
       on(UserAction.setUser, (state, {user}) =>{
         return adapter.setOne(user, state);
       }),

       on(User.Action.upSertUser, (state, {user})=>{
         return adapter.upsertOne(user, state);
       }),
       on(User.Action.addUsers, (state, {users}) => {
         return adapter.addMany(user, state);
       }),
  
       on(UserAction.upsertUser, (state, {users}) =>{
            retrun adapter.upSertMany(users, state);
       }),
       on(UserActin.updateUser, (state, {update}) => {
            return adapter.updateOne(update, state);
       }),

       on(UserActin.updateUsers, (state, {updates}) => {
            return adapter.updateMany(updates, state);
       }),



       on(UserActin.mapUser, (state, {entityMap}) => {
            return adapter.mapOne(entityMap, state);
       }),

       on(UserActin.mapUsers, (state, {entityMap}) => {
            return adapter.map(entityMap, state);
       }),


       on(UserActin.deleteUser, (state, {id}) => {
            return adapter.removeOne(id, state);
       }),

       on(UserActin.deleteUsers, (state, {users}) => {
            return adapter.removeMany(users, state);
       }),


       on(UserActin.deleteUsersByPredicate, (state, {predicate}) => {
            return adapter.removeMany(predicate, state);
       }),


       on(UserActin.loadUser,(state,{users}) => {
            return adapter.setAll(update,state);
       }),

       on(UserActin.setUsers,(state,{users}) => {
            return adapter.setMay(update,state);
       }),

       on(UserActin.clearUser,state) => {
            return adapter.removeAll({...state,selectUserId: null});
       }),
     );



export const getSelectUserId = (state : State) => state.setlectUserId;

// get the selectors
const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = adapter.getSelectors();

// select the array of user ids
export const selectUserIds = selectIds;
// select the dictionary of user entities
export const selectUserEntity = selectEntites;
// select the array of users
export const selectAllUser = selectAll;
// select the total user count
export const selectTotal = selectTotal;
