import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';

import {BookStateComponent} from './components/bookState.component';
import {BookListComponent} from './components/book-list/book-list.component';
import {CollectionBookComponent} from './components/book-collection/book-collection.component'; 

import {BookStateRouterModule} from './book-routing.module';
import {bookReducer}       from '../../store/reducers/book.reducer';
import {collectionReducer} from '../../store/reducers/collection.book.reducer';

@NgModule({
  imports : [
             CommonModule,
             BookStateRouterModule,
      //     StoreModule.forRoot({}), 
             StoreModule.forRoot({books : bookReducer, collection : collectionReducer}
             ),
            ],
  exports : [],
  providers : [],
  declarations : [BookStateComponent, BookListComponent, CollectionBookComponent]
})

export class BookModule {}