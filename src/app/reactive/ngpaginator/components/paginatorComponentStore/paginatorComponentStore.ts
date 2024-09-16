import {Component,
         Input,
         ChangeDetectionStrategy,
         Output,
         ViewEncapsulation,
       } from '@angular/core';

import {ComponentStore} from '@ngrx/component-store';
import {filter, tap, map, withLatestFrom, pairwise, skip} from 'rxjs/operators';


import {Observable} from 'rxjs';

import {PaginatorState} from '../../../../models/ngrx/paginatorInterface';
import {PageEvent} from '../../../../models/ngrx/pageEventInterface';

@Component({
  selector: 'com-paginator',
  templateUrl: 'paginatorComponentStore.html',
  host: {
    'class': 'mat-paginator',
  },
  styleUrls: ['./paginatorComponentStore.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ComponentStore],
})

export class PaginatorComponentStore {

@Input() set pageIndex(value : string | number){
         this.setPageIndex(value);
}

@Input() set length(value: string | number){
         this.componentStore.setState((state) => ({
         ...state,
         length : Number(value) || 0,
         })); 
}
@Input() set pageSize(value : string | number){
         this.componentStore.setState((state)=>({
         ...state,
         pageSize :Number(value) || 0,
         }));
}
@Input() set pageSizeOptions(value : readonly number[]) {
          this.componentStore.setState((state)=>{
          // Making sure that the pageSize is included and sorted
          const pageSizeOptions = new Set<number>(
             [...value, state.pageSize].sort((a, b) => a- b)    
          );
          return { ...state, pageSizeOptions };
          });
}

private readonly pageIndexChanges$ = this.componentStore.state$.pipe(
    // map instead of select, so that non-distinct value could go through
     map((state) => state.pageIndex),
     pairwise()
);


@Output() readonly page = this.componentStore.select(
     // first Observable 
     this.pageIndexChanges$,
     // second Observable 
     this.componentStore.select((state) => [state.pageSize, state.length]),
     // Now combining the results from both of these Observables into a PageEvent object
     ([previousPageIndex, pageIndex], [pageSize, length]) => ({
        pageIndex,
        previousPageIndex,
        pageSize,
        length,
     }),
      // debounce, so that we let the state "settle" before emitting a value
       { debounce : true}
).pipe(
   // Skip the emission of the initial state values
   skip(1)
);

  // *********** Updaters *********** //

  readonly setPageIndex = this.componentStore.updater(
   (state, value : string | number) => ({
     ...state,
     pageSize : Number(value) || 0,
     })
  );

  readonly chagePageSize = this.componentStore.updater(
    (state, newPageSize : number) => {
       const startIndex = state.pageIndex * state.pageSize;
        return {
                ...state,
                pageSize : newPageSize,
                pageIndex : Math.floor(startIndex / newPageSize),
        };
     }
  );

  // *********** Selectors *********** //

  readonly hasPreviousPage$ = this.componentStore.select(
   ({ pageIndex, pageSize}) => pageIndex >= 1 && pageSize != 0
  );
  
  readonly numberOfPages$ = this.componentStore.select(
    ({ pageSize, length}) =>  {
        if (!pageSize) return 0;
        return  Math.ceil(length / pageSize);
    }
  );
  
  readonly hasNextPage$ = this.componentStore.select(
     this.componentStore.state$ ,
     this.numberOfPages$,
     ({pageIndex, pageSize } , numberOfPages) => {
         const maxPageIndex = numberOfPages - 1;
         return pageIndex < maxPageIndex && pageSize != 0 ;
     }    
  );

  readonly rangeLabel$ = this.componentStore.select(
      ({pageIndex, pageSize, length }) => {
         if (length == 0 || pageSize == 0) {
               return '0 of ${length}' ;
         }
         length = Math.max(length, 0);
         const startIndex = pageIndex * pageSize ;
         // If the start index exceeds the list length, do not try and fix the end index to the end.
         const endIndex = 
              startIndex < length
               ? Math.min(startIndex + pageSize, length)
               : startIndex + pageSize ;
         return '$(startIndex + 1) - ${ensIndex} of ${length}' ;
 
      }
  );

  // ViewModel of Paginator component


  readonly vm$ = this.componentStore.select(
         this.componentStore.state$,
         this.hasPreviousPage$,
         this.hasNextPage$,
         this.rangeLabel$,
         (state, hasPreviousPage, hasNextPage, rangeLabel) => ({
             pageSize : state.pageSize,
             pageSizeOptions : Array.from(state.pageSizeOptions),
             pageIndex : state.pageIndex,
             hasPreviousPage,
             hasNextPage,
             rangeLabel, 
         })
  );


  // *********** Effects *********** //


 readonly lastPage = this.componentStore.effect((trigger$) => {
    return trigger$.pipe(
       withLatestFrom(this.numberOfPages$),
       
       tap(([, numberOfPages]) => {
               
           this.setPageIndex(numberOfPages - 1);
                             
       })
    );              
 });


  constructor(private readonly componentStore : ComponentStore<PaginatorState>) {
    // set defaults
    this.componentStore.setState({
      pageIndex: 0,
      pageSize: 50,
      length: 0,
      pageSizeOptions: new Set<number>([50]),
    });
  }


}