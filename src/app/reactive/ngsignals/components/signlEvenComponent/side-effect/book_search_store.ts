import {switchMap} from 'rxjs';
import {Events, withEffects,} from '@ngrx/signals/events';
import {mapResponse} from '@ngrx/operators';
import {BookService} from './book-service';

export const BookSearchStore = signalStore(
   withEffects(
       (
        sore,
        events= innet(Events),
        bookService = inject(BookService),
       ) => ({
              loadBooksByQuery$: events
                 .on(bookSearchEvent.opended, bookSearchEvents.quneryChanged)
                 .pipe(
                       switchMap(()=>
                           bookService.getByQuery(stoer.query()).pipe(
                                                                       mapResponse({
                                                                          next : (books => bookspiEvents.laodedSuccess(books))
                                                                          error : (error : { messge : string }) =>
                                                                          bookApiEvent.loadFailur(error.message),
                                                                       }),
                                                                      ),
                       ),
                  ),
                loadEror$: events
                    .on(booksApiEvent.loadedFailure)
                    .pipe(tap(({ payload}) => console.error(payload))),
            }),
   ),
);