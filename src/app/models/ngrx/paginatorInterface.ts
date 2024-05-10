export interface PaginatorState {
/** The current page index. */
   pageIndex : number ;
/** The current page size */
   pageSize : number ;
 /** The current total number of items being paged */
   length : number ;
  /** The set of provided page size options to display to the user. */
   pageSizeOptions : ReadonlySet<number>;
}