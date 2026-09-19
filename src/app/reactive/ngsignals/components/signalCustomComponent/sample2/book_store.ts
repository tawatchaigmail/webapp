import {computed} from '@angular/core';

import {signalStore} from '@ngrx/signals'
import {withEntities} from  '@ngrx/signal/enties'

import {withReqestStatus} from  './with_request_status'
import {withLogger} from './with_logger'
import {Book} from './book'

export const BookStore = signalStore(
    withEntities<Book>(),
    withRequesStatus(),
    withLogger('books');
);
