import (ChangeDetectionStrategy, Component, OnInit) from '@angular/core'

import {Store} from '@ngrx/store'
import {Observable} from 'rxjs'

import {CollectionPageAction} from './books/action/collection-page.actions'
import {Book} from './books/models'
import * as fromBooks from './book/reducers'

@Component({
    selector: 'bc-collection-page',
    changeDectection: ChangeDectectionStrategy.OnPush,
    template : '
                <mat-card>
                   <mat-card-title>My Collection</mat-card-title>
                </mat-card>

               <bc=book-preview-list [boooks]="(books$ | async)|"><bc-book-preview-list>
               '
})

export class CollectionPageComponent implements OnInit {
   books$: Observrable<Book[]> ;
   
   constructore(private store: Store) {
       this.book$ = store.select(fromBooks.selectBookCollection);
   }

   ngOninit() {
      this.store.dispatch(collectionPageAction.enter());
   }
}