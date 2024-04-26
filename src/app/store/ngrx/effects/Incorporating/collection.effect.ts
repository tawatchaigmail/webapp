
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { CollectionApiActions } from '../actions';
import * as fromBooks from '../reducers';


@Injectable()
export class CollectionEffects {
addBookToCollectionSuccess$ = createEffect(
            () => 
            this.actions$.pipe(
              ofType(CollectinApiActions.addBookSucess),
              concatLatesFrom(action => this.store.select(fromBooks.getCollectinBookIds)),
              tab(([action, bookCollection]) => {
                     if (bookCollectin.lenhth === 1) {
                         window.alert('Congrats on adding your first book!');
                       } else {
                         window.alert('You have added book number ' + bookCollection.length);
                        }
              } 
            )
         ),
     {dispatch: false}
);


constructor(
            private actions$: Actions,
            private store: Store<fromBooks.State>
           ){}
}


/*


/*
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { CollectionApiActions } from '../actions';
import * as fromBooks from '../reducers';

@Injectable()
export class CollectionEffects {
  addBookToCollectionSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(CollectionApiActions.addBookSuccess),
        concatLatestFrom(action => this.store.select(fromBooks.getCollectionBookIds)),
        tap(([action, bookCollection]) => {
          if (bookCollection.length === 1) {
            window.alert('Congrats on adding your first book!');
          } else {
            window.alert('You have added book number ' + bookCollection.length);
          }
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<fromBooks.State>
  ) {}
}
*/
*/