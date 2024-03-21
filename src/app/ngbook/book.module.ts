import {NgModule} from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
//import {HttpClient} from '@angular/common/http';
//import { HttpClientModule } from '@angular/common/http';
import {StoreModule} from '@ngrx/store';

import {BookStateComponent} from './components/bookState.component';
import {BookListComponent} from './components/book-list/book-list.component';
import {CollectionBookComponent} from './components/book-collection/book-collection.component'; 

import {BookStateRouterModule} from './book-routing.module';
import {bookReducer}       from '../store/reducers/book.reducer';
import {collectionReducer} from '../store/reducers/collection.book.reducer';

// import {BookService} from '../service/bookService'


@NgModule({
  imports : [
             CommonModule,
      //       BrowserModule,
             BookStateRouterModule,
      //     StoreModule.forRoot({}), 
             StoreModule.forRoot({books : bookReducer, collection : collectionReducer}
             ),
      //       StoreModule.forFeature(authFeatureKey,reducer)
      //       HttpClientModule,
            ],
  exports : [],
  providers : [],
  declarations : [BookStateComponent, BookListComponent, CollectionBookComponent]
})

export class BookModule {}