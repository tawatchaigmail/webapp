import {createActionGroup, props} from '@ngrx/store';
import {Book} from '../../models/bookInterface';

export const bookAction = createActionGroup({
  source : 'Books',
  events : {
            'Add Book'    : props<{ bookId : string }>() ,
            'Remove Book' : props<{ bookId : string }>() ,
           },
}) ;

export const bookApiAction =  createActionGroup({
   source : 'Book Api',
   events : {
             'Retrieved Book List' : props<{ books : ReadonlyArray<Book> }>(),
            },
});