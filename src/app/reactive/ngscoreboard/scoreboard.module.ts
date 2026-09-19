import {NgModule} from '@angular/core' ;
import {CommonModule} from '@angular/common' ;
import {StoreModule, provideState, provideStore} from '@ngrx/store' ;

import {BoardStateRouting} from './scoreboard.routing';
import {ScoreBoardComponent} from './components/scoreboard.component';

import {scoreboardFeatureKey, scoreboardReducer} from '../../store/ngrx/reducers/scoreboard.reducer';
import {StoreRouterConnectingModule, routerReducer} from '@ngrx/router-store'; 

import {enviromentdevtools} from '../../environments/environments';

@NgModule({
 imports : [
            CommonModule,
            BoardStateRouting,
           
            /*
            StoreModule.forRoot(
                                {
                                 game : scoreboardReducer,
                                 router : routerReducer
                                }
                               ), 
            */
            StoreModule.forFeature(scoreboardFeatureKey, scoreboardReducer),
       //     StoreModule.forFeature( 'router' , routerReducer ),
       
       //     enviromentdevtools.imports,
           ],
 exports : [],
 providers : [
  //            provideStore({ game : scoreboardReducer}),
  //            provideState({name: 'game', reducer : scoreboardReducer})
            ],
 declarations : [ScoreBoardComponent]
})

export class ScoreBoardModule {}