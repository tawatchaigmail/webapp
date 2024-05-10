import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable,of} from 'rxjs';

import {Movie} from '../../models/ngrx/movieInterface';

@Injectable({providedIn : 'root'})

export class MoviesService {

url = '/assets/data_movies.json';

      constructor(private http : HttpClient) {}

      moviesList : Movie[] = [
                                  {
                                   id : "0",
                                   name : "redmoon", 
                                   content : "scsic fiction"       
                                  },
                                  {
                                   id : "0",
                                   name : "Avanture" ,
                                   content : "action" ,   

                                  },
                                 ];    

    getAll() : Observable<Movie[]> {  
     return   this.http.get<Movie[]>('/movices') ;
     }  

    getAllMoviesList(): Movie[] {
     return this.moviesList;
    }

    async getMovies(): Promise<Movie[]> {

    const data = await fetch(this.url);
    console.log(data);
      return await data.json() ?? []; 
    }

    getAllList(): Movie[] {
     return this.moviesList;
    }
    
    loadMovies(moviesPerPage : number, currentPageIndex : number) {
    }
}

