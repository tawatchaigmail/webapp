import {Component, OnInit} from '@angular/core';

@Component({
         selector : 'scroll-board',
         templateUrl : './scoreboard.component.html',
         styleUrls : ['./scoreboard.component.scss']
         })

export class ScoreBoardComponent implements OnInit {

     //  constructor()
       
       ngOnInit() : void {
          console.log('ngOnInit ScoreBordComponent');
        }
}