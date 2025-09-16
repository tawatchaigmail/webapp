import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';

import {BookListStore} from './book-list-store';

@Component({
    selector : 'ngrx-sg-service',
    templateUrl : './book-list-service.component.html',
    styleUrls : ['./book-list-service.component.scss'],
    providers : [BookListStore],
    changeDetection : ChangeDetectionStrategy.OnPush,
})

export class BookListComponent implements OnInit {
  readonly store = inject(BookListStore);

  constructor(){  
      this.store.loadBooks();
  }
  ngOnInit(){
    console.log('ngsignalSrvice')
  }
}