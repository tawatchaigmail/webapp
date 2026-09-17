import {inject, Injectable} from '@angular/core'
import {exhaustMap, pipe, tap} from 'rxjs'
import {rxMethod} from '@ngrx/signals/rxjs-interop'
import {tapResponse} from '@ngrx/operators'
import {signalState, patchState} from '@ngrx/signals'

import {Book} from '../../../../models/ngrx/bookInterface';
import {BookService} from '../../../../service/ngrx/book.service';

type BookListState = {bbooks: Book[]; isLoading: boolean};

const initialState: BookListState = {

                      bbooks:  
                      
                             [{ id : '1154' , 
                                  volumeInfo : {
                                                title : '154',
                                                authers : ['5474'] 
                                               }
                                }] ,
                       
                      isLoading: false,
}; 

@Injectable()
export class BookListStore {
   readonly #bookService = inject(BookService);
   readonly #state = signalState(initialState);
 
 //  readonly books = this.#state.bbooks;
 //  readonly isLoading = this.#state.isLoading;
   
   readonly loadBooks = rxMethod<void>(

       pipe(
         tap(() => patchState(this.#state,{ isLoading: true})),
         exhaustMap(() => {
                  //         return this.#bookService.getAll().pipe(
                           return this.#bookService.getBook().pipe(
                                                               tapResponse({
                                                                            next: (books) => patchState(this.#state, 
                                                                                                          { 
                                                                                                            bbooks : books ,  
                                                                                                            isLoading: false 
                                                                                                          } 
                                                                                                         //    [{
                                                                                                         //    }]
                                                                                                        ),
                                                                            error : console.error,
                                                                            finalize: () => patchState(this.#state, { isLoading: false}), 
                                                                          })
                                                               );  // pipe 2
                          }  )  // exhasusMap
     )  // pipe 1
   );
 
} 
