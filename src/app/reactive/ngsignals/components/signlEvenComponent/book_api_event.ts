import {type} from '@ngrx/signals'
import {event} from '@ngrx/signals/event'
import {Book} from './interfaceBook'

export const loadSuccess = event('[Book API] Loaded Success',type<Book>());
export const loadFailur = event('[Book API] Loaded Failure',type<string>());


