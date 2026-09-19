
import {type} from '@ngrx/signals'
import {eventGroup} from '@ngrx/signals/event'

export const bookSearchEvents = eventGroup({
      source : 'Book Search Page',
      events : (
//  Defining an event creator without a payload.
               open: type<void>(),
               queryChange: type<string>(),
               ),
});