import {Component, EventEmitter, Input, Output ,OnInit} from '@angular/core';

import {Book} from '../../../models/bookInterface';

@Component({
         selector : 'app-collection-book',
         templateUrl : './book-collection.component.html',
         styleUrls : ['./book-collection.component.scss']
})

export class CollectionBookComponent implements OnInit {
  @Input() books : ReadonlyArray<Book> = [] ;
  @Output() remove = new EventEmitter<string>();
 
  ngOnInit() {} ;
}