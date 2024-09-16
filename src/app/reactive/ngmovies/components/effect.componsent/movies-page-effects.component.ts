import {Component, OnInit} from '@angular/core';
import {Store} from  '@ngrx/store';
import {Observable,of} from 'rxjs';

import {Movie} from '../../../../models/ngrx/movieInterface'; 
import {movieSelector} from '../../../../store/ngrx/selector/movie.selector';
import {MoviesApiActions} from '../../../../store/ngrx/actions/movies-api.actions';

@Component ({
      selector : 'movice-effect',
      templateUrl : './movies-page-effects.component.html',
      styleUrls : ['./movies-page-effects.component.scss']
})


export class MovicesPageEfectCompanent implements OnInit {

//  movies$ : Observable<Movie[]> = this.store.select(state => state.movies); 
  movies$ : Observable<Movie[]> = this.store.select(movieSelector); 

  constructor(private store : Store<{ movies : Movie[] }>){}

  ngOnInit(){
    // this.store.dispatch({ type : '[Movies Page] Load Movies' });
    this.store.dispatch( 
      MoviesApiActions.movieLosdSuccess({ movies: [
                                                   {id : "0",name: "name50", content:"content0"},
                                                   {id : "1",name: "name51", content:"content1"},
                                                   {id : "2",name: "name52", content:"content2"}
                                                  ]
                                       })
    );
  }

}


