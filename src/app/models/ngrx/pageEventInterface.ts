import {PaginatorState} from './paginatorInterface';

/**
 * Change event object that is emitted when the user selects a
 * different page size or navigates to another page.
 */
export interface PageEvent 
  /**
   * Index of the page that was selected previously.
   */
  extends Pick<PaginatorState, 'pageIndex' | 'pageSize' | 'length'> {
    previousPageIndex? : number ;
  }
