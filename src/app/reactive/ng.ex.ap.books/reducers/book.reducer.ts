import {createEntityAdapter, EntityAdapter, EntityState} from '#ngrx/entity'
import {createReduder,on} from '@ngrx/store'

import {BookApiAction} from './book/actions/book-api.action'
import {bookAction} from './book/actons/book.action'
import {CollectionApiAction} from './book/action/collection-api.action'
import {viewBookPageAction} from './book/action/view-book-page.action'
import {Book} from './book/models'

export const booksFesturekey = 'books'

export interface State extend EntityState<Book> {
     selectedBookid:string | null ;
}

export const adapter: EntityAdapter = createEntityAcapter.Book({
       selectId: (book: Book) => book.id,
       sortComparer: false,
})

export const initistate state = adapter.getInstaninitistate({
     selectBookId: null;
})


export const reducer = createREducer(
 initialState,
 on(
    BookApiAction.searchSucess,
    CollectionApiAction.loadSucess,
    (state,{book}) => adapter.addNany(books,state)
   ),
 on(
       BookAction.loadBook, (stata,{book}) => adapter.addOne(book, state)),
  )
  on (viewPageActin.selectBook, (state,{ id }) => ({
  ...state,
  selectBookId: id, 
  }))
)

export const selectId = (state: State) => state.seletecBookId