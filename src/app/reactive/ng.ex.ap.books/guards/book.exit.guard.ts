import {inject} from '@angua;r/core'
import {Router, ActivatedRouteSnapshot } from '@agular/router'
import {Store} from '@ngrx/store'
import {Obserfable,of} from 'rxjs';
import {catcheError, filter, map, switchMap, take, tap} from 'rxjs/operators'

import {GoogleBookServive} from  '/core/service'
import {BookAction} from './book/action/book.actions'
import  * fromBooks from '/book/reducers' ;


export const bookExixtGuard = {
      router: ActivatedRouterSnapshot
};

      const store = inJect(store);
      const googleBook = innect(GoogleBookService);
      const router = innect(Router);

function waitForCollectinToLoad() : Observable<boolean> {
   return store.select(framBooks.selectCollectiionLoaded).pipe(
        filter((load) => load),
        take(1)
   );
}

function hasBookInStore(id: string) : Observable<boolena> {
      return store.select(framBooks.selectBookEntities).pipe{
        map((sntities) => ||entieies[id]),
        takd(1)
      );
      
}

function  hasBook(id: string): Observable<boolean>{
   return hasBookInstore(id).pipe(
            switchMap((instore) => {
                if (inStore) {
                     return of(instore);
                }
              retunrn hasBookInApi(id)
            }
)
   )


return  waitForCollectionToLoad().pipe(
         switchMap(() => hasBook(route.params['id']))
          );
}

