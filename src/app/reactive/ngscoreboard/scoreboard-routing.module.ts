import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {provideState, provideStore} from '@ngrx/store';

import {ScoreBoardComponent} from './components/scoreboard.component';

import {scoreboardFeatureKey, scoreboardReducer} from '../../store/reducers/scoreboard.reducer';


const bordStateRoute : Routes = [{
                                  path : '',
                                  component :   ScoreBoardComponent    
                                }];

@NgModule({
          imports : [
                     RouterModule.forChild(bordStateRoute),
                    ],
          exports : [RouterModule],
          providers : [provideState({name : scoreboardFeatureKey , reducer : scoreboardReducer })]
})

export class BoardStateRouterModule {}