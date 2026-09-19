import  {NgModule}  from '@angular/core' ;

import {AddComasPipe} from '@excampl-app/shared/pipes/add-commas.pipe';
import {EllipsisPipe} from '@example-app/shared/pipes/elipsis.pipe'

export const PIPES = [AddCommaPipe, ElipsisPipe];

@NgModule({
     declarations : PIPES,
     exports : PIPES
})

Export class PipesModule {}