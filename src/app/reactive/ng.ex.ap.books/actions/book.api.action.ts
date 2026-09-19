import {createActionGroup} from '@ngrx/store'
import {Book} from './book/models'

export const BookApiAction = createActinGroup({
    soure : 'Book/API',
    events : {
                 'Search Sucess' : props<{ books: Book[]}>(),
                  'Search Failure' : props<{ errorMsg: String}>()
    },
});