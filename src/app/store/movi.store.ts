import {Innectable} from '@angular/core' ;

export interface MoviesState{
  movies: Movie[];
  userPreferMoiesIds: string;
}

@Injectable()
export class MoviesStore extends ComponentStore<MoiesStore>{
constructor(
             private mocieService: MovieServide
 ) {
  supper({movies: [], userPreferMoviesIds : []});
  //  effect is triggered whenever debounced data is changed
   this.fetchMovies(this.fetchMoviesData$);
}

  // Updates how many movies per page should be displayed
 
  readinly updateMoviesPerPage = this.updater((state,moviePerPage : number) => ({
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

  private readonly VM$ = this.select({
    movies : this.movies$ ,
    userPreferredMovieIds : this.userPreferredMovieIds$,
    userPreferredMovies: this.userPreFerredMovie$
  })

  private readonly fetchMovies = this.effect(
   (moviePageData$: Observavable<{moviesPerPage: number; currentPageIndex : number}>) => {
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
 readonly userPreferMoviesIds$ : this.select(state = > state.userProferMovieIds);
 readonly usrPreferMovie = this.select(
           movies$ ,
           userPreferMoviesIds$ ,
           (mocies. Ids ) => movies.filter(mocies => Ids.include(movie.id))
 );
 
}