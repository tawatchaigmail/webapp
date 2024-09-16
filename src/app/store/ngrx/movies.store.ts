import {Injectable} from '@angular/core' ;

import {ComponentStore} from '@ngrx/component-store';
import {Observable, of} from 'rxjs';

import {map,tap,exhaustMap,catchError,concatMap} from 'rxjs/operators'; 

import {MoviesService} from '../../service/ngrx/movies.service';

import {Movie} from '../../models/ngrx/movieInterface'; 
import {MovieState} from '../../models/ngrx/movieStateInterface';

/*
export interface MoviesState{
  movies: Movie[];   
  userPreferredMoviesIds : string[];
}
*/

@Injectable()
export class MoviesStore extends ComponentStore<MovieState>{
         constructor(
                      private movieService: MoviesService
                    ) {
                      super({movies : [], userPreferredMoviesIds : [], moviesPerPage : 0, currentPageIndex : 0, userPreferMoiesIds : '0'});
                     
  //  effect is triggered whenever debounced data is changed
                    this.fetchMovies(this.fetchMoviesData$);
         }

  // Updates how many movies per page should be displayed
 
 
  readonly updateMoviesPerPage = this.updater((state, moviesPerPage : number) => ({
                                                                                   ...state,
                                                                                   moviesPerPage, // updates with new value
  })) ;


  // Updates which page of movies that the user is currently on

  
  readonly updateCurrentPageIndex = this.updater((state, currentPageIndex: number) => ({
                                                                                        ...state,
                                                                                        currentPageIndex, // updates with new page index
  })) ;

  readonly updateMovieResults = this.updater((state, movies : Movie[]) => ({ 
                                                                        // movies : [...state.movies , movies ],
                                                                         ...state,
                                                                          movies ,
         })) ;


// readonly movies$: Observable<Movie[]> = this.select(state => state.movies);  

  readonly movies$ = this.select(state => state.movies);
  readonly userPreferredMovieIds$ = this.select(state => state.userPreferredMoviesIds);

  readonly moviesPerPage$ = this.select(state => state.moviesPerPage);

  readonly currentPageIndex$ =  this.select(state => state.currentPageIndex);

  private readonly fetchMoviesData$ = this.select({
                                                   movies : this.movies$ ,
                                                   moviesPerPage : this.moviesPerPage$,
                                                   currentPageIndex : this.currentPageIndex$
  },{ debounce : true});

  
 readonly userPreferredMovies$ = this.select(
        this.movies$,
        this.userPreferredMovieIds$,
        (movies, ids) => movies.filter(movie => ids.includes(movie.id))
  );

//   private readonly VM$ = this.select({
   readonly VM$ = this.select({
                                      movies : this.movies$ ,
                                      userPreferredMovieIds : this.userPreferredMovieIds$,
                                      userPreferredMovies : this.userPreferredMovies$
  })
   
  
  private readonly fetchMovies = this.effect(                   
   (moviePageData$: Observable<{moviesPerPage: number; currentPageIndex : number}>) => {                    
         return moviePageData$.pipe(
           concatMap(({moviesPerPage, currentPageIndex }) => { 
                 return this.movieService
                      .loadMovies(moviesPerPage, currentPageIndex)
                      .pipe(tap((results) => this.updateMovieResults(results)));
                 }),
         );
    },
   
  );
 
 
 readonly usrPreferMovie = this.select(
           this.movies$ ,
           this.userPreferredMovieIds$ ,                
           (movies, Ids) => movies.filter(movie => Ids.includes(movie.id))
 );
  

}