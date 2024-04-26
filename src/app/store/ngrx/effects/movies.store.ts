import {Injectable} from '@angular/core' ;

import {ComponentStore} from '@ngrx/component-store';
import {Observable, of} from 'rxjs';

import {map,tap,exhaustMap,catchError} from 'rxjs/operators'; 


import {MoviesService} from '../../../service/ngrx/movies.service';

import {Movie} from '../../../models/ngrx/movieInterface'; 
import {MovieState} from '../../../models/ngrx/movieStateInterface';

/*
export interface MoviesState{
  movies: Movie[];
  userPreferMoviesIds: string;
}
*/

@Injectable()
export class MoviesStore extends ComponentStore<MovieState>{
constructor(
             private mocieService: MoviesService
 ) {
  super({movies: [], userPreferMoviesIds : []});
                     
  //  effect is triggered whenever debounced data is changed
   this.fetchMovies(this.fetchMoviesData$);
}

  // Updates how many movies per page should be displayed
 
  readonly updateMoviesPerPage = this.updater((state,moviePerPage : number) => ({
  ...state,
  moviesPerPage, // updates with new value
  })

  // Updates which page of movies that the user is currently on
  
  readonly updateCurrentPageIndes = this.updater((state, currentPageIndex: number) = > ({
   ...state,
  curetnrPageIndex, // updates with new page index
  })

  readonly moviesPerpage$ = this.select(state => state.moviesPerPage);
  readonly currentPageIndex =  this.select(state => state.currentPageIndex);

  private readonly fetchMoviesData = this.select({
   moviePerPage : this.moviePerPage$,
   currentPageIndex: this.currentPageIndex$
  },{ debounce : true});
 
  /*
  private readonly VM$ = this.select({
    movies : this.movies$ ,
    userPreferredMovieIds : this.userPreferredMoviesIds$,
                                 
    userPreferredMovies: this.userPreferredMovie$
                              
  })
   
  
  private readonly fetchMovies = this.effect(
   (moviePageData$: Observable<{moviesPerPage: number; currentPageIndex : number}>) => {
                    
         return moviePageData.pipe(
           concatMap(({moviesPerPage, currentPageIndex }) => { 
                    return this.movieService
                      .loadMovies(moviesPerpage, cuttentPageIndex)
                      .pipe(tap((results) => this.updateMovieResults(results)));
                 }),
         );
    },
   
  );
 

 readonly movies$: Observable<Movie[]> = this.select(state => state.movies);
 readonly userPreferredMoviesIds$ : this.select(state = > state.userPreferMoviesIds);

                                                             
 readonly usrPreferMovie = this.select(
           movies$ ,
           userPreferMoviesIds$ ,
           (movies. Ids ) => movies.filter(movies => Ids.include(movie.id))
 );
 

}