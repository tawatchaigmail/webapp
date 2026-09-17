import {type} from '@ngrx/signals'
import {event} from '@ngrx/signals/event'

export const opened = event('[Book search Page] Opened');
export const queryChange = event(
        '[Book Search Page]Query Changed ',
          // The payload type is defined using the `type` function.
         type<string>(),
       );

