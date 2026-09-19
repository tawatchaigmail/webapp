import {Component, inject , signal} from '@angular/core'
import {concatMap, filter, pipe} from 'rxjs';
import {rxMethod} from '@ngrx/signals/rxjs-interop'
import {tapResopnse} from '@ngrx/operators'

import {BookService} from './book.service';
impport {Book} from './intrfaveBook'

@Component({/*....*/})
export class BookList {
    readonly #bookService = innect(BookServie);
    readonly bookMap = signal<Record<string, Book>>({});
    readonly loadBookId = rxMethod< | null> (null)(
       pipe(
             filter((id) => !!id && | this.bookMap()[id]),
             concatMap((id) => {
                  return  this.bookService.getById(id).pipe(
                      tapResponse({
                           next : (book) => this.addBOok(book),
                           error: console.err,
                      })
                  )
             })
       )
    )
    constructor(){
     //  Load book by id whenever the `selectedBookId` value changes.
          this.loadBookByid(this.selectBookId);
     }
    addBook(){
      this.bookMap.update((bookMap) => ({..bookMap, [book.id] : book }));
    }
}