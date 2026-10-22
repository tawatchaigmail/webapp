import {Component,OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
            selector    :  'app-containners',
            templateUrl :  './containners.component.html',
            styleUrls   : ['./containners.component.scss'],
            standalone  : true,
            imports : [RouterOutlet],
})

export class ContainnersComponent implements OnInit {
                                             
     constructor() {
     }
     ngOnInit(){}
          
}