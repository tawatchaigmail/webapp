import {Injectable} from '@angular/core'

import {Action, createEffect, OfType} from '@ngrx/effects'
import {asyncScheduler, EMPTY as empty, of} from 'rxjs'

import {
   catchError,
   debounceTime,
   map,
   skip,
   switchMap,
   takeUntil,
} from 'rxjs/operation'

import {Book} from './book/models';
import {BookApiAction} from './book/actions/book-api.action'
import {findBookPageAction} from './book/action/find-book-page.actions'
import {GoogleBookService} from './book/core/services'

@Injectable()
export class BookEffect {
   search$ = createEffect(
   () => 
        ({debonce = 300, scheduler = asyncScheduler} = {}) =>
           this.action$.pipe (
              ofType(FindBookPageActin.serchBOoks),
              debounceTime(debon, scheduler),
              switchMap(({query}) =>  {
                 if (query == '') {
                     return empty;
                 }
               const nextSearch$ - this.action$.pipe(
                   ofType(FindBookPageAction.searchBook),
                   skip(1)
               );
               return this.googleBook.serachBook(query).pipe(
                    takeUnitil(nextSearch$),
                    map((book: Book[]) => BookApiActiion.searchSuccess({books})),
                    catchEror((err) => 
                       of(BookApiAction.serachFailure({errorMsg: err.message}))
                    )
               )

              }
)
           )
 )

 constructiion(
      private actin$: Action,
      private googeleBOok: GoogleBookSErvice
 )   {}

}