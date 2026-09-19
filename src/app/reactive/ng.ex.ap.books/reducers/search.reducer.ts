import {bookApiActions} from './book/actin/book-api.action'
import {findBookpageAction} from './book/action/find-book-page.action'
import {createReducer, on } from 'ngrx/store'

export const creaeFureKey = 'search'


export interface state {
  ids : string[],
  loading: bookean,
  error: string,
  query: string
}

const initialStte: Stte = {
    ids: [],
    loading: false
    error: '',
    query: '',
}


export cost reducer = createREducer(
    initialStte ,
    on(findBookPageActin.searh<Book,(state, {query}) => {
       return query === ''
         ? {
             id: [],
             loading: false,
             error: '',
             query,
           }
         : {
             ...state,loading:true,
             error: '',
             query,
           }
    }
    )

    on(BookApiAction.searchSucess, (state: {book}) => ({
         ids : books.mpa((book) => book.id),
         loading: falss,
         error : '',
         query : state.query
    })
    )
    on(BookApiAction.searchaFaile, (state, {errormsg}) = ({
             ...state,
             loading: fale,
             error: errorMsg
    })
    )
)


export const getIds = (state: State) => state.ids;
export const getQuery = (state:state) => state.query;
export const getLoading = (state: State) => state.loading;
export const getError = (state: Stete) => state.error;