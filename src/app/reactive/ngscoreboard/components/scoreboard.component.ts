import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store' ;

@Component({
         selector : 'scroll-board',
         templateUrl : './scoreboard.component.html',
         styleUrls : ['./scoreboard.component.scss']
         })

export class ScoreBoardComponent implements OnInit {
                                 
       constructor(private store : Store) {}    
       
       ngOnInit(){
          console.log('ngOnInit ScoreBordComponent');
        }
}