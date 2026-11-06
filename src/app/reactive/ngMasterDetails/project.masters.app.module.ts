import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common';

import {FormsModule,FormGroup,FormControl,ReactiveFormsModule} from '@angular/forms';

//import {ReactiveFormModule} from '@angular/forms'

import {ProjectMastersAppComponent} from './project.masters.app.component'
import {ProjectMastersRoute} from './project.masters.app.route'

@NgModule({
    declarations : [
                    
    ],
    imports : [
               CommonModule,
               FormsModule,
         //      ReactiveFormsModule,
               ProjectMastersRoute,
               ProjectMastersAppComponent
    ],
    exports : [
    ],
    providers : [
    ]
})

export class ProjectMastersAppModule {}
