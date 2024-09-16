
import {Component, OnInit} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
//import {MoviesStore} from '../../../../store/ngrx/movies.store';
import {MoviesReadStore} from '../../../../store/ngrx/movies-read.store';

import {Movie}      from '../../../../models/ngrx/movieInterface'; 
import {MovieState} from '../../../../models/ngrx/movieStateInterface';
import {movieSelector} from '../../../../store/ngrx/selector/movie.selector';

@Component({
     selector : 'movie-comread',
     templateUrl : './movie-page-read.component.html',
     styleUrls : ['./movie-page-read.component.scss'],

     providers : [MoviesReadStore],
})

export class MoviesPageReadComponent implements OnInit {
   readonly movies$ = this.moviesStore.select(state => state.movies);

   constructor(
    // private readonly componentStore : ComponentStore<{movies : Movie[]}>
    // private readonly movieComponentStore : ComponentStore<{movies : MovieState}>
              private readonly moviesStore : MoviesReadStore

              ) {}

   ngOnInit(){
     //  this.movieComponentStore.setState({movies: []});
     console.log(' init page read movies component');
     
       this.moviesStore.setState({
                    //                  movies: [],
                                    movies :  [
                                        {id : "0",  name : "wareee-read",  content : "action", },
                                        {id : "1",  name : "madmax-read",  content : "action", }
  
                                      ],

                                      userPreferredMoviesIds : [],
                                      moviesPerPage : 10,
                                      currentPageIndex : 5,
                                      userPreferMoiesIds : '0'
                                     });
    
   }
}