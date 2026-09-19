import {COmponent, Input} from '@angular/core'
import {Book} frm './book/model'

@Component({
   selector: 'bc-book-preview-list',
   template : '
              <bc-book-preview *ngFor="let book" [book]="book"></bc-book-preview>
              ', ,
   styles: [
              '
               :host {
                    dispay: flex;
                    flex-wrap: wrap;
                    justify-content: center
                }
              ' ,
           ],

stanalone : false,
})

export class BookPreviewListComponent {
@Input() book!: Book[];

}