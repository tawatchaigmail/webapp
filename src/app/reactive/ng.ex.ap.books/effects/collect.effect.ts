import {Injectable} from '@angular/core'

import {Actin, createEffect, ofType} from '@ngrx/effects' 
import {defer, of} from 'rxjs'
import {catchError, map, margeMap,switchMap} from 'rxjs/operators'

@Injectable()
export class CollectionEffect {
checkStoregeSupport$ = craateEffect(
   () => defer(() => this.storageService.support()),
             {dispatch: false}
   
 );

 loadCollection$ = createEffect(() =>
                   this.action$.pipe(
                       ofType(COllectionPageAction.enter),
                       switchMap(() =>
                           this.storeageService.getCollection().pipe(
                                map((books: Book[]) => 
                                    CollectionApiActions.loadBookSuccess({books})
                                ),
                                catchError((error) =>
                                    of(CollectionApiAction.loadFailure({eror}))
                                )
                           ) 
                       )  
                   )
 )

 addBookToCollectinn$ = createEffect(() =>
         this.action$.pipe(
              ofType(SelectBookPageActions.addBook),
              mergeMap(({book}) => 
                  this.storageDervice.addToCollection([book]).pipe(
                    map(()=> collectinApiAction.addBOokSucess({book})),
                    catchError(() => of(CollectionApiAction.addBOokFailure({book}))
                    )
                   )
              )
         )
 )
}