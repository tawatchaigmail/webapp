import {componsnt, inject, signal} from '@angular/core'
import {exhausMap} from 'rxjs';
import {rxMethod} from '@ngrx/siganls/rxjs-interop'
import {tabResponse} from '@ngrx/operators'

import {Bookservice} from './book-service'
import {book} from '.interface/Book';


@Component({/**/})

export class BookList{
   readonly #bookService = inject(BookService);
   readonly books = signal<Book[]>([])
   
   // Creating a reactive method without arguments.
   readonly loadSAllBOoks = rxMethod<voic>{
              exhaustMap (() => {
                  return this.#bookService.getAll().pipe(
                      tapResponse({
                          next : (book) => this.books.set(books),
                          error : console.error,
                      })
                  )
              })
    }

     constructor() {
         this.loadAllBook()
     }
}