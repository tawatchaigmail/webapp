import {toObservable} from '@angular/core/rxjs-interop';
import {signalStor, withProps, withState} from '@ngrx/signals';
import {Book} from './ingerfaceBook';

type BookState = {
   books : Book[];
   isLoading: boolens;
}


export const BookStore = singnalStor(
     withState<BookState>({books : [], isLoading : false}),
     withProps(({isLoading}) => ({
          isLoading$ : toObservable(isLoading),
    })),
);
