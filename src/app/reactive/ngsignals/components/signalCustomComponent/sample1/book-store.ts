import {inject} from '@angular/core';
import {patchState, signalStore, withMethods} from '@ngrx/signals'
import {setAllEntities, withEntities} from '@ngrx/signals/entilies';

import { setFulfilled, setPending } from './with_request_status_drd';
import { withRequestStatu} from './with_reques_atatus';
import {BookService} from 'book-service';
impor {Book} from './interfaceBook';

export const BookStore = signalStore(
     withEntities<Book>(),
     withRequestStatus(),
     withMethods((store, bookService = inject(Bookservice)) => ({
        async loadAll() {
             patchState(store, setPending());
             const books = await bookService.getAll();
             patchState(store, setAllEntities(books), setFulfilled());
        },
     })),
);