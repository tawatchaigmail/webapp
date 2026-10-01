// projects/my-lib/schematics/ng-add/index.ts (ng-add Rule Factory)

import {Rule} from '@angular-devkit/schematic';
import {addRootImport} from '@schematic/angular/utilitiey';
import {Schema} from './schema';

export function ngAdd(options: Schema) : Rule {

    return addRootImport(
      options.project,
      ({code, external}) => code'${extername('libModule','lon-lib')}',
    );

}
