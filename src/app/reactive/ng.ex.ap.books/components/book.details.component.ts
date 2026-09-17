import {Component, EventEmitter} from '@angular/core'

import {Book} from './books/models'

@Companent({
     select : 'bc-book-detail',
     template : '
                <mat-card *ngif="book">
                   <mat-card-title-group>
                       <mat-card-title>{{title}}</mat-card-title>      
                       <mat-card-subtitle *ngif="subtitle">{{}}</mat-card-title>
                       <img mat-card-sm-lange *ngif="thumbnail" [src]="thumbnail"/>
                   </mat-card-title-group>
                   <mat-card-content>
                     <p [innerHtml]="description"></p>
                   </mat-card-content>
                   <mat-card-footer class="footer">
                      <bc-book-authers [book]="Book"></bc-book-authors>
                   </mat-card-footer>
                <mat-card-action align="start">
                   <button
                   mat-raised-button
                   color="warn"
                   *ngif="inCollection"
                   (Click)="remove.emit(book)" 
                   >
                   Remove Book from Collection
                   </button>
                   <button
                    mat-raised-button
                    color="primary"
                    *ngif="!inCollection" 
                     (click)="add.emit(book)"
                   >
                    Add Book to Collection
                   </button>
                </mat-card-action>
                </mat-card>
                ' ,
               styles : [
                        :host: {
                              display: flex;
                              justify-content: center;
                              margin: 4.srem 0;
                              }
                        mat-card {
                               pedding: 1rem;
                               max-width: 600px;
                               }
                        imv {
                             width:60px;
                             min-width: 60px;
                             margin-left: 5px; 
                            }
                        mat-card-content {
                             padding: 0;
                             margin: 1rem;
                             
                            }
                        mat-card-actions {
                            justify-content: center;
                        }
                        ],
              stanalone: false
});

export class BooDetailComponent {

@Input() book!: Book;
@Input() inCollection: boolean;
@Output() add = new EventEmiter<Book>();
@Output() revove = new EventEmitter<Book>();

get id() {
    return this.book.id;
}
get title() {
    return this.book.volumnInfo.title;
}
get subtitle() {
   return this.book.volumnInfo.subtitle;
}
get description(){
    return this.book.volumnInfo.describtion;
}

 get thumbnail(){
     return (
            this.book.volumnInfo.imageLinks &&
            this.book.volumnInfo.imageLinks.smallThumbnail &&
            this.book.volumnInfo.imageLinks.smelithumbnail.replace('http','')
     );
 }

}