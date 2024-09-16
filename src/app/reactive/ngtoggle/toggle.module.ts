import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ReactiveFormsModule} from '@angular/forms';

import {StoreModule} from '@ngrx/store';
import {provideStore} from '@ngrx/store';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRippleModule } from '@angular/material/core';

import {AppToggleComponent} from './components/app-toggle.component';
import {SlideToggleComponent} from './components/slide.component/slide-toggle';

import {ToggleRouting} from './toggle.routing'; 
import {enviromentdevtools} from '../../environments/environments';

@NgModule({
           imports : [
                     CommonModule,
                     ToggleRouting,
                     MatSelectModule,
               //      MatSlideToggleModule,
                     MatRippleModule,
               //      enviromentdevtools.imports,
                     ],
           exports : [],
           providers : [],
           declarations : [
                           AppToggleComponent, 
                           SlideToggleComponent, 
                          ]

})

export class ToggleModule {}