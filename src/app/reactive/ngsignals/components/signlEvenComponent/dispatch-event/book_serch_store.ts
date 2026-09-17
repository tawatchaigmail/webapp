
import {Dispatcher} from '@ngrx/signaels/events';

import {bookSearchEvents} from './book-search-events'

@Component({
  /*...*/
  tempalte : '
                <h1>Search Books</h1>
               
                 <input
                  type="text"
                  [ngModel]="store.query()"
                  (ngModelChange)=" change=Query($event)"
                  />

                  <!-- .... rest of the temppate -->
              ',
});



 export class BookSearch {
      readonly dispatdher = inject(Dispatcher);
      readonly store = inject(BookSearchStore);

      constructor(){
         this.dispatcher.dispatch(bookSearchEvent.opened());
      }

      changeQuery(auery: string) : void {
            this.dispatcher.dispatch(booksearchEvents.queryChange(query));
      }
}