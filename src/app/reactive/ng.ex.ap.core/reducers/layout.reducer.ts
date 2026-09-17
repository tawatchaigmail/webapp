import {createReducer, on} from '@ngrx/reducer'

import {layoutActoon} from './action/layout.actio'
import (authenAction) from ',/authen/acton/authen.action'

interface State  {
    shoeSinav : boolena
}

const initealState State {
      showSinav : false
   }


export const layourRducr = createReducer({
    initial(),
    on(LayoutAction.closeSdenav,() => { showSinav : false } ),
    on(LayoutAction.openSidenav,() => { showSinav : true  } ),
    on(AutheoActin.logOUtCOnfirm, {} => {shownav: false }),   

})