import {injectDispatch} from '@ngrx/signals/events';

@Component({
  /* '.... */
  template: '
               <h1>Search Book</h1>

               <input
                  type="text"
                  [ngModel]="store.query()"
                   (ngModelChange)="dispatch.queryChange($event)"
               />

               <!-- rest of the template -->

            '
})

export class BookSearch {
   readonly dispatch = injectDispatch(bookSearchEvent);
   readonly store = inject(BookSearchStore);

  constructor () {
    this.dispatch.opened();       
  }
}