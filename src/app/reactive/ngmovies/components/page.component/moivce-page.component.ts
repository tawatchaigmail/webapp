
import {Component, OnInit} from '@angular/core';
import {ComponentStore} form '@ngrx/store';

@Component({
     selector : 'movice-com',
     templateUrl : './moivce-page.component.html',
     styleUrls : ['./moivce-page.component.scss']
 //  providers : [ComponentStore]
});

export class MoviesPageComponent implement OnInit {
   readonly movies$ = this.componentStore.select(state => state.movies);

   constructor(
     private readonly componentStore : ComponentStore<{movies : Movie[]}>
   ) {}

   ngOnInit(){
       this.componentStore.setState({movies: []});
   }
}