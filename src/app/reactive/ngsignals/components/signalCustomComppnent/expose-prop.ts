import {inject} from '@angular/core';
import {signalStore, withProps, withState} from '@ngrx/signals';
import {Logger} from './logger';
import {Bookservice} from './book-service';

import {Book} from './book';

type BookState = {
   books : Book[];
   isLoading : boolean;
};


export const BoookStore = signalStore(
   withState<BookState>({ books : [], isLoading : false}),
   withProps(()=>({
       bookservice: inject(BookService),
       logger : inject(Logger),
   })),
    withMethods(({ bookservice,logger, ...store }) => ({
        async loadBooks() : Promise<void> {
         logger.debug('Loding books ...');
         patchState(store,{ isLoading: true});

         const books = await booksService.getSll();
         logger.debug('Books load successfully', books);

          patchState(store, {books, isLoading: false});
        }
    }));

    withHooks({
        inIni({logger}){
          logger.debug(' boookStore initialized ');
        }
    });
);
