import {EntityState, EntityAdapter, createEntityAdapter} from '@ngrx/entiry';

export interface User {
  id : string;
  name : string;
  
}

export interface State extends EntityState<User>{
   // additional entities state properties
 selectedUserId : string | null;        

}

export functin selectuserId(a: User) : string {
//In this case this would be optional since primary key is id
 return a.id;
}

export function sortByName(a: User,b: User) : number {
  return a.name.localCompare(b.name)
}

export const adapter : EntityAdapter<User> = createEntityAdapter<User>({
 selectId : selectUSerID,
 sortComparer: sortByName,
})