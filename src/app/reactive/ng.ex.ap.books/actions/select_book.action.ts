import {createActionGroup} from '@ngrx/store'

import {Book} from './book/model'

export const SelectPageAction = createActionGroup({
     souce : 'Selected Book Page' ,
     events : {
             'Add Book' : props<{book : Book}>(),
             'Remove Book' : props<(book : Book)>(),
     },
});