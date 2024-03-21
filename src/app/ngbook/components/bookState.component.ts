import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store' ;
import {bookAction, bookApiAction} from '../../store/actions/book.action';
import {bookSelects, bookCollectionSelect} from '../../store/selectors/book.selector';
import {BookListComponent} from './book-list/book-list.component';
import {CollectionBookComponent} from './book-collection/book-collection.component'; 
import {BookService} from '../../service/bookService'

@Component({
     selector : 'ngx-book',
     templateUrl : './bookState.component.html',
     styleUrls : ['./bookState.component.scss'],
})

export class BookStateComponent implements OnInit {
   books$      = this.store.select(bookSelects) ;
   collection$ = this.store.select(bookCollectionSelect) ;
  
   constructor(private bookSevice : BookService, private store : Store) {}

   ngOnInit() {
     console.log('bookStateComponsnt');
     this.bookSevice.getBook().subscribe(books => this.store.dispatch(bookApiAction.retrievedBookList({ books }))
                                        )
   }

   onAdd(bookId : string){
       this.store.dispatch(bookAction.addBook({bookId}));
   }

   onRemove(bookId : string){
       this.store.dispatch(bookAction.removeBook({bookId}));
   }
} 