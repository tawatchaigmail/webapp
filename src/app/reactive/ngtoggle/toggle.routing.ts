
import {NgModule} from '@angular/core';
import {provideEffects} from '@ngrx/effects';
import {RouterModule,Routes} from '@angular/router';

import {AppToggleComponent} from './components/app-toggle.component';
import {SlideToggleComponent} from './components/slide.component/slide-toggle';


export const slideToggleRoutes : Routes = [
                                     {
                                      path : '',
                                      component : AppToggleComponent,                                  
                                      /*
                                      children: [
                                                {
                                                    path: 'slide',
                                                    component: SlideToggleComponent,
                                                },
                                                ]
                                     
                                     */
                                     },
                                     {
                                                    path: 'slide',
                                                    component: SlideToggleComponent,

                                      }
 
                                     ];

@NgModule({
          imports : [
                     RouterModule.forChild(slideToggleRoutes)
                    ],
          exports : [RouterModule],
       
    
})


export class ToggleRouting {}