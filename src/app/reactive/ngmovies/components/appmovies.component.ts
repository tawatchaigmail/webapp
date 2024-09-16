import {Component , OnInit} from '@angular/core';
import {MoviesService} from '../../../service/ngrx/movies.service';

import {Movie} from '../../../models/ngrx/movieInterface'; 

@Component({
           selector : 'ngx-movies',
           templateUrl : './appmovies.companent.html',
           styleUrls:['./appmovies.companent.scss']
       
})

export class AppMoviesComponent implements OnInit {

//     movies : Movie[] ;
//     movies$ : any ;
     constructor(private moviesService : MoviesService){}
    
     ngOnInit(){
         console.log(' init component movie ');
//       this.movies$ = this.moviesService.getAll().subscribe( movies  => this.movies$ = movies ) ;
     }
}