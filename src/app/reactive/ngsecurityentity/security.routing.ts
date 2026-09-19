import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {} from '@ngrx/store';

import {SecurityEntityCOmponent} from './components/SecurityEntityCOmponent';

const securityStateRoute : Routes = [
                                    {
                                  path : '',
                                  component : SecurityEntityCOmponent
                                }
                                ];
@NgModule({
           imports : [
                      RouterModule.forChild(securityStateRoute),
                    ],
           exports : [RouterModule],
           providers : []
})

export class SecurityRouting {}