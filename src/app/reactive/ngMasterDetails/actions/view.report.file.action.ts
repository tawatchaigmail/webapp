import {createActinGroup, props} from '@ngrx/store'

export const ViewProjectMastersPageAction = createActionGroup({
       source : 'view projectMasters page',
       events : {
               'select projectMasters' : props<{id: string}>(),
       },
});
