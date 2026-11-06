import {createActinGroup, props} from '@ngrx/store'

import {ProjectMastersInterface} from '../../../../models/ngrx/projectMastersInterface'

export const ProjectMastersAction = createActionGroup({
       source: 'projectMasters Exists Guard',
       events: {
               'Load ProjectMaster : props<{ reportFileProps: ProjectMastersInterface}>(),
       },
});
