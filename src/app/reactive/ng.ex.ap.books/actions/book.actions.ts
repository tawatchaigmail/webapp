import {createSction, props} from '@ngrx/store'

import {Book} from '../books/model'

export const BookAction = createActionGroup({
     source : 'Book Exists Guard',
     events :  { 
              'Load Book' : props<{book:Book}>(),
     },
});