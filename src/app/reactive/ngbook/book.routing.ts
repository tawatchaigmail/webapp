import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {BookStateComponent} from './components/bookState.component';

const bookStateRoute : Routes = [
                                {
                                  path : '',
                                  component : BookStateComponent
                                }
                                ];

@NgModule({
         imports : [
                    RouterModule.forChild(bookStateRoute),
                   ],
         exports : [RouterModule],
         providers : []
})


export class BookStateRouting {}