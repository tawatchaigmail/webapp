import {
         Component,
         Input,
         ChangeDetectionStrategy,
         Output,
         ViewEncapsulation,
       } from '@angular/core';


import {PaginatorStore} from '../../../../store/ngrx/paginator.store';

@Component({
            selector : 'paginator',
            templateUrl : './paginatorStoreService.html',
            host: {
                      'class' : 'mat-paginator',
                  },
             styleUrls : ['./paginatorStoreService.scss'],
             encapsulation : ViewEncapsulation.None,
                            
             changeDetection : ChangeDetectionStrategy.OnPush,

             providers  : [PaginatorStore],
           })


export class PaginatorComponent {

 @Input() set pageIndex(value : string | number) {
       this.paginatorStore.setPageIndex(value);
 }
  
 @Input() set length(value : string | number) {
        this.paginatorStore.setLength(value);
 }

 @Input() set pageSize(value : string | number) {
         this.paginatorStore.setPageSize(value);
 }

 @Input() set pageSizeOption(value : readonly number[]) {
           this.paginatorStore.setPageSizeOptions(value);
  }

  // Outputing the event directly from the page$ Observable<PageEvent> property.
  /** Event emitted when the paginator changes the page size or page index. */

  @Output() readonly page = this.paginatorStore.page$ ;

  // ViewModel for the PaginatorComponent 

  readonly vm$ = this.paginatorStore.vm$;

  constructor(private paginatorStore : PaginatorStore) {}


  changePagesize(newPageSize : number){
    this.paginatorStore.changePageSize(newPageSize);
  }

  nexPage() {
     this.paginatorStore.nextPage();
  }

  fiestPage() {
    this.paginatorStore.firstPage();
  }
  
  lastPage() {
     this.paginatorStore.lastPage();
  }
}