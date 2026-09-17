import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {JsonPipe} from '@angular/common' ;

import {BookSearchStore} from './book.search.store';
//import {BooksList} from './bookList' ;
//import {Filter} from './Filter' ;

@Component({
           imports: [JsonPipe],
           selector : 'ngrx-store-search',           
           templateUrl : './signal.store.book.search.component.html',
           styleUrls : [ './signal.store.book.search.component.scss' ],
           providers : [BookSearchStore],
           changeDetection : ChangeDetectionStrategy.OnPush,
           standalone : true,
})


export class BookStoreSerchComponent{
     readonly store = inject(BookSearchStore)

     constructor(){
       const query = this.store.filter.query;

       this.store.loadByQuery(query);
     }

     /*
     addbook(book:Book) : void {
           patchState(this.store, ({books }) => ({books: [...books,books]}) );
     }
     */

}
