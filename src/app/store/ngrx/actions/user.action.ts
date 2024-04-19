import {createAction,props} from '@ngrx/store';
import {Update, EntityMap, EntityMapOne, Predicate} from '@ngrx/entity' ;

impoer {User} from '../models/user.model';

export const loadUsers = createAction('[User/API] Load Users',props<{ users : User[] }>());
export const setUsers = createAction('[User/API] Set Users',props<{ users : User[] }>());
export const addUser = createAction('[User/API] Add User',props<{ user : User }>());

export const setUser = createAction('[User/API] set User',props<{ user : User }>());
export const upsertUser = createAction('[User/API] UpSert User',props<{ user : User }>());
export const addUsers = createAction('[User/API] Add Users',props<{ users : User[] }>());

export const upsertUsers = createAction('[User/API] upsert Users',props<{ users : User[] }>());

export const updateUser = createAction('[User/API] update User',props<{ user : User }>());
export const updateUsers = createAction('[User/API] update Users',props<{ users : User[] }>());

export const mapUser = createAction('[User/API] map User',props<{ user : User }>());
export const mapUsers = createAction('[User/API] map Users',props<{ users : User[] }>());

export const deleteUser = createAction('[User/API] delete User',props<{ user : User }>());
export const deleteUsers = createAction('[User/API] delete Users',props<{ users : User[] }>());
export const deleteUserByPredicate = createAction('[User/API] delete Users By Predicate ',props<{ predicate : Predicate }>());

export const clearUsers = createAction('[User/API] Clear Users');