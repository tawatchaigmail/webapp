import {type} from '@ngrx/signals'
import {eventGroup} from '@ngrx/signals/event';

import {Book} from './interfaceBook';

export const bookApiEvent = eventGroup({
          source : 'Book API',
          events : {
                losdSuccess: type<Book>(),
                loadFailur: type<string>().
          },
 });