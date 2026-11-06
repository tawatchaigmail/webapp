import {createActionGroup, props} from '@ngrx/store'

import {ProjectMastersInterface} from '../../../../models/ngrx/projectMastersInterface'

export const CollectionProjectMastersApiAction = createActionGroup({
       source : 'CollectionProjectMasters/API',
       events : {
              'Add ProjectMasters Success': props<{ProjectMastersProps: ProjectMastersInterface}>(),
              'Add ProjectMasters Failure': props<{ProjectMastersProps: ProjectMastersInterface}>(),
              
              'Remove ProjectMasters Success': props<{ProjectMastersProps: ProjectMastersInterface}>(),
              'Remove ProjectMasters Failure': props<{ProjectMastersProps: ProjectMastersInterface}>(),
               
              'Load ProjectMasters Success': props<{ProjectMastersProps: ProjectMastersInterface}>(),
              'Load ProjectMasters Failure': props<{ProjectMastersProps: ProjectMastersInterface}>(),
       },
});
