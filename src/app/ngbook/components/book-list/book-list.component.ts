import {Component,EventEmitter,Input,Output,  OnInit} from '@angular/core';

import {Book} from '../../../models/bookInterface';

@Component({
            selector : 'app-list-book',
            templateUrl : './book-list.component.html',
            styleUrls : ['./book-list.component.scss'] 
})

export class BookListComponent implements OnInit {
  
@Input() books : ReadonlyArray<Book> = [] ; 
@Output() add = new EventEmitter<string>(); 
  ngOnInit() {}
}