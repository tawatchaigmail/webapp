
import {Component, OnInit} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {MoviesStore} from '../../../../store/ngrx/effects/movies.store';

import {Movie} from '../../../../models/ngrx/movieInterface'; 
import {movieSelector} from '../../../../store/ngrx/selector/movie.selector';

@Component({
     selector : 'movice-com',
     templateUrl : './moivce-page.component.html',
     styleUrls : ['./moivce-page.component.scss'],
     providers : [ComponentStore, MoviesStore],
})

export class MoviesPageComponent implements OnInit {
   readonly movies$ = this.componentStore.select(state => state.movies);

   constructor(
     private readonly componentStore : ComponentStore<{movies : Movie[]}>
   ) {}

   ngOnInit(){
       this.componentStore.setState({movies: []});
   }
}