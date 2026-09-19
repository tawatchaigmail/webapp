import {createActionGroup} from '@ngrx/store'
import {book} from './book/model' 

export const CollectoinApiAction = createActionGroup({
   soure : 'Collection/API' ,
   event : {
              'Add Book Sucess' : props<{book : Book}>(),
              'Add Book Failure' : props<{book: Book}>(),
              
              'Remove Book Sucess' : props<{ book : Book }>(),
              'Remove Book Failure' : props<{book : Book}>(),
               
              'Load Book Success' : props<{book : Book}>(),
              'Load Book Failure' : props<{book : Book}>(),
   },
});