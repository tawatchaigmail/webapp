import {Component , OnInit} from '@angular/core';
import {MoviesService} from '../../../service/movies.service';

import {Movie} from '../../../models/moviceInterface'; 

@Component({
           selector : 'ngx-movies',
           templateUrl : './movies.companent.html',
           styleUrls:['./movies.companent.scss']
})

export class MoviesComponent implements OnInit {
//     movies : Movie[] ;
     movies : any ;
     constructor(private moviesService : MoviesService){}
    
     ngOnInit(){

       this.movies = this.moviesService.getAll().subscribe( movies  => this.movies = movies ) ;
     }
}