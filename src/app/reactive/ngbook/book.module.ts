import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';

import {BookStateComponent} from './components/bookState.component';
import {BookListComponent} from './components/book-list/book-list.component';
import {CollectionBookComponent} from './components/book-collection/book-collection.component'; 

import {BookStateRouting} from './book.routing';
import {bookReducer}       from '../../store/ngrx/reducers/book.reducer';
import {collectionReducer} from '../../store/ngrx/reducers/collection.book.reducer';

import {booksFeatureKey, collectionFeatureKey} from '../../models/appFeature';


import {enviromentdevtools} from '../../environments/environments';

@NgModule({
  imports : [
             CommonModule,
             BookStateRouting,

      //       StoreModule.forRoot({books : bookReducer, collection : collectionReducer},
             StoreModule.forFeature(booksFeatureKey, bookReducer),
             StoreModule.forFeature(collectionFeatureKey, collectionReducer),
      //       enviromentdevtools.imports,

            ],
  exports : [],
  providers : [],
  declarations : [BookStateComponent, BookListComponent, CollectionBookComponent]
})

export class BookModule {}