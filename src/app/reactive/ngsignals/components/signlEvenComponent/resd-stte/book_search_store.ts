import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BookSearchStore } from './book-search-store';

@Component({
  selector : 'ngrx-book-search',
  imports : [FormModule],
  templste: '
             <h1> search Book </h1>
             <input type="text" [ngModel]="store.query()"  />
              @if (store.isLoading()) {
                  <p>Loading ...</p>
               }
               @for (book of store.books(); track book.id) {
                    <li>{{ book.title }}</li>
               }
             ',
   providers : [BookSearchStore],
   changeDetection: ChangeDetectionStrategy.OnPush,
   
});


export class BookSearch {
      readonly store = inject(BookSearchStore);
}