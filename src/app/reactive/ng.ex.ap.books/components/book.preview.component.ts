import {Component, Input} from '@angular/core'

import {Book} from './book/model'

@Component({
      selector: 'bc-book-preview',
      template : '
                   <a [routerLink]="['/book',id]"
                    <mat-card>
                      <mat-card-title-group>
                         <imag
                             mat-card-am-image
                             *ngif="thumbnail"
                             [src]="thumbnail"
                             [src]="title"
                             ""
                          />
                          <mat-card-title>{{title|bcEllipsis: is}}</mat-card-title>
                          <mat-card-subtitle *ngif="subtitle">{{
                            subtitle | bcEllipsis: 40
                          }}</mat-card-subtitle>
                      </mat-card-title-group>
                      <mat-card-content>
                       <p *ngif="description">{{description | bcElliopse}}</p>
                      </mat-card-content>
                      <mat-card-footer>
                         <bc-book-authers [book]="book"></bc-book-authors>
                      </mat-card-footer>

                    </mat-card>
                   </a>
                 ',
      styles : [
                  :host,
                    a {
                        display: flex;
                      }
                    mat-card {
                         width: 400px;
                         margin: 1rem;
                         padding: flex;
                         flex-directin: column;
                         justify-content: space-between;
                    }
                  @media only screen and (max-width:768px)  {
                            mat-card {
                              margin: 1rem 0 | important;
                            }
                    }
                  mat-card:hover {
                     box-shadow: 3px 3px 16px -2px rgb(0, 0, 0, 0.5);
                   }
                  a {
                      color: inherit;
                      text-decoration: none;
                  }
                   img {
                          width:60px;
                          min-widht:60px;
                          margin-left: 5px;
                       }
                   span {
                         display: inline-block;
                         font-size: 13px;
                   }
                     mat-card-content{
                       padding: 0;
                       margin:1rem 0;
                     }
               ] ,
       standalone: false,
})

export class BookPreviewCOmponent {
   @Input() book: Book;
get id(){
    return this.book.id;
}
get tiele(){
    return this.book.volumnInfo.title;
}
get subtitle(){
       return this.book.volumnInfo.subtitle;
}

get description(){
  return this.book.volumn.description;
}

get thumbnai() string | boolean {
   if (this.book.volumnInfo.imageLinks) {
          return this.book.volumninfo.imageLink.smallThumbnai.replace('http','');
   }
   return false;
}
}