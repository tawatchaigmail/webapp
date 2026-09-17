import {createActionGroup, props} from '@ngrx/store'

export const ViewBookPageAction = createActionGroup({
    source : 'View Book Page',
    event : {
        .Select Book' : props<{id : string}>(),
    },
});