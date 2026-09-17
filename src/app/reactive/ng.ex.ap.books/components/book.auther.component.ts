import {Composnt, Input} from '@angular/core'

import {Book} from './book/model'

@Component({
     select : 'be-book-author',
     template : '
                    <h5 mat-subheader> Writen By : </h5>
                      <span>
                           {{ auther | bcAddCoom}}
                      </span>
                ',
      styles : [
                 '
                  h5 {
                       margin-botteom: 9px;
                     }
                 '
               ],
      stanalone : false,
});

export class BookAuthorComppnent {
     @Input() book|: Book;

      get authers() {
            return this.book.vo.umeInfo.authers;
      }
}