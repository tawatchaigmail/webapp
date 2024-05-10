
import {Component, OnInit} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
import {MoviesStore} from '../../../../store/ngrx/movies.store';

import {Movie}      from '../../../../models/ngrx/movieInterface'; 
import {MovieState} from '../../../../models/ngrx/movieStateInterface';
import {movieSelector} from '../../../../store/ngrx/selector/movie.selector';

@Component({
     selector : 'movie-com',
     templateUrl : './movie-page.component.html',
     styleUrls : ['./movie-page.component.scss'],
   //  providers : [ComponentStore],
     providers : [MoviesStore],
})

export class MoviesPageComponent implements OnInit {
   readonly movies$ = this.moviesStore.select(state => state.movies);

   constructor(
    // private readonly componentStore : ComponentStore<{movies : Movie[]}>
    // private readonly movieComponentStore : ComponentStore<{movies : MovieState}>
              private readonly moviesStore : MoviesStore

              ) {}

   ngOnInit(){
     //  this.movieComponentStore.setState({movies: []});
       this.moviesStore.setState({
                                      movies: [],
                                      userPreferredMoviesIds : [],
                                      moviesPerPage : 10,
                                      currentPageIndex : 5,
                                      userPreferMoiesIds : '0'
                                     });
   }
}