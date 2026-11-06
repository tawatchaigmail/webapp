import {createActionGroup, props} from '@ngrx/store'

import {ProjectMastersInterface} from '../../../../models/ngrx/projectMastersInterface'


export const SelectProjectMasterPageAction = createActionGroup({
       source : 'select reportFileMasters page',
       events : {
               'Add projectMasters'   : props<{projectMastersProps: ProjectMastersInterface}>(),
               'Remove projectMasters': props<projectMastersProps: ProjectMastersInterface>(),
       }
});
