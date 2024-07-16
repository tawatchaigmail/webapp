import {createActionGroup, createAction, emptyProps, props} from '@ngrx/store';
import {ReportFileMasters} from '../../../models/ngrx/reportFileMastersInterface';

export const reportFileMastersAction = createActionGroup({
  source : 'reportFileMasters',
  events : {
            getAll : emptyProps(), 
            add        : props< {data : ReportFileMasters}> (),
            getById    : props< {id : string}> (),
            updateById : props< {id : string, data : ReportFileMasters}> (),
            deleteById : props< {id : string}> () ,
           },
}) ;

/*
export const getAll = createAction('[bicycle Component] getAll', );
export const add = createAction('[bicycle Component] add', props< {data : Bicycle} > ()   );
export const getById = createAction('[bycle Component] getById', props< {id : string} > ()   );
export const updateById = createAction('[bicycle Component] updateById', props< {id : string, data : Bicycle} > ()  );
export const deleteById = createAction('[bicycle Component] deleteId', props< {id : string} > ()  );
*/