import {NgModule} from '@angular/core' ;
import {CommonModule} from '@angular/common' ;
import {StoreModule, provideState, provideStore} from '@ngrx/store' ;

import {BoardStateRouterModule} from './scoreboard-routing.module';
import {ScoreBoardComponent} from './components/scoreboard.component';

import {scoreboardFeatureKey, scoreboardReducer} from '../../store/ngrx/reducers/scoreboard.reducer';

import {StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store'; 

@NgModule({
 imports : [
            CommonModule,
            BoardStateRouterModule,
        //    StoreModule.forRoot({}),
            
            StoreModule.forRoot(
                                {game : scoreboardReducer, router : routerReducer}
                               ), 

            StoreModule.forFeature(scoreboardFeatureKey, scoreboardReducer),
            StoreRouterConnectingModule.forRoot(),
           ],
 exports : [],
 providers : [
  //            provideStore({ game : scoreboardReducer}),
  //            provideState({name: 'game', reducer : scoreboardReducer})
            ],
 declarations : [ScoreBoardComponent]
})

export class ScoreBoardModule {}