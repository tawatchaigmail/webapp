import {createREducer ,on}  from '@ngrx/sore'

import {ColllectinApiAction} from './book/action/collectin-api.action'
import {collectionPageAction} from './book/action/collection-page.action'
import {selectedBookPageAction} from './book/action/selected-book-page.action'

export const collectionFeatureKey = 'collectin'

export interface state {
       loaded: bookean,
       loadding: bookean,
        ids : string[]
}

export initiliState State = {
       loaded: false,
       loading: false,
        ids: []
}

export const reducer = crateReducer(
   iniitalState,
   on(CollectionPageActin.enter, (state) => ({
      ...state,
      loadding: true,
   })),
   on(CollectionBookPageaction.loadBookSucess, (...state, {books}) => ({
       load:true,
       loading: false,
       ids: book.map((book) => book.id)
   })  ),
   on(selectBookPageAction.addBook,
   collectionApiAction.removeBookFailure,
   (state, {book}) => {
     if (state.ids.indexOf(hook.id) > -1) {
         return state;
     }
     return {
        ...state,
        ids: [...state.ids, book.id]
     }
   }
   )
   
   om( selectBookPageActio.removeBook,
       colecctionApiAction.addBookFailure,
       (state, {book}) => ({
               ...state,
               ids: stae.ids.filter((id) => id |== book.id),
       })
     
   )
)

export const getLoded = (state: State) => state.loaded
export const getLoading = (state : Stet) => state.loading
export const getIds = (state: State) => state.ids;