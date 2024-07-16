
import {Component, OnInit} from '@angular/core';
import {ComponentStore} from '@ngrx/component-store';
//import {MoviesStore} from '../../../../store/ngrx/movies.store';
import {MoviesCombiningStore} from '../../../../store/ngrx/movies-combining.store';

import {Movie}      from '../../../../models/ngrx/movieInterface'; 
import {MovieState} from '../../../../models/ngrx/movieStateInterface';
import {movieSelector} from '../../../../store/ngrx/selector/movie.selector';

@Component({
     selector : 'movie-combining',
     templateUrl : './movie-page-combining.component.html',
     styleUrls : ['./movie-page-combining.component.scss'],

     providers : [MoviesCombiningStore],
})

export class MoviesPageCombiningComponent implements OnInit {
   readonly movies$ = this.moviesStore.select(state => state.movies);

   constructor(
    // private readonly componentStore : ComponentStore<{movies : Movie[]}>
    // private readonly movieComponentStore : ComponentStore<{movies : MovieState}>
              private readonly moviesStore : MoviesCombiningStore

              ) {}

   ngOnInit(){
     //  this.movieComponentStore.setState({movies: []});
     console.log('movies component');
     
       this.moviesStore.setState({
                    //                  movies: [],
                                    movies :  [
                                        {id : "0",  name : "wareee-combine",  content : "action", },
                                        {id : "1",  name : "madmax-combine",  content : "action", }
  
                                      ],

                                      userPreferredMoviesIds : [],
                                      moviesPerPage : 10,
                                      currentPageIndex : 5,
                                      userPreferMoiesIds : '0'
                                     });
    
   }
}