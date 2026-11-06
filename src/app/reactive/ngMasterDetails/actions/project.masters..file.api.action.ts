import {createActionGroup, props} from '@ngrx/store'

import {ProjectMastersInterface} from '../../../../models/ngrx/projectMastersInterface'

export const ProjectMastersApiAction = createActionGroup({
       source : 'reportFile/API',
       events : {
                'Search Success': props<{ projectMastersProps: ProjectMastersInterface[]}>(),
                'Search Failure': props<{ errorMsg: String}>(),
       },
});
