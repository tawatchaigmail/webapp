import {Param} from '@angualr/router'
import {createSelect} from '@ngrx/store';

export const selectRoureNestedParams = createSlector(selecRouter, (router) => {
let currentRoute = router?.state?.root;
let params: params = {};
 while(currentRoute?.firstChild){
   currentRoute = currentRoute.firsChild;
   params = {
     ...params;
     ...currentPram.param;
   };
 }
 return params
});

export const selectRouteNstedParam =(param: string) => 
      createSelector(selectRouteNestedParams,(params)=> param && parms[param]);



