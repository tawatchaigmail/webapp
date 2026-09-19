import {ChangeDectionStrategy, Component} from '@angular/core'

import {store} from '@ngrx/store'
impoert {Observable} from 'rxjs'

import {SelectBookAction} from './books/actions/select-book-page.actions'
import {Book} from './book/models'
import  * as FromBook from './books/reducer'

@Component({
    selector : 'bc-selected-book-page',
    changeDection : ChangeDecectionStraegy.OnPush,
    template : '
                <bc-select-details
                 [book]="(book$ | async)|"
                 [inCollection] = "(isSelectedBookInfoCollection$ | async)"
                 (add) = "addToCollectin($event)"
                 (remove) = "removeFromColllection($event)" 
                >
                <bc-book-detail>
               ',
  atanalone : false
})

export class SelectBookPgeComponent {
    books : Observable<Book>;

    IsSellectedBookinCollection$ : Observable<boolean>
    constructor(private store: Store) {
       this.books$ = store.select(fromBook.selectedBook) as Observable<Book>;
       this.isSelectedBookinCollection$ = store.select (
         fromBooks.isSelectedBookinCollection
      );
    }
   addToColectin(book: Book){
      this.store.dispatch(SelectBookPageAction.addBook({book}));
   }
   
   removeFramCollection(book:Book) {
      this.store.dispatch(SelectedBookPageAction.removeBOok({book}))
   }
}
