import {Component,OnInit} from '@angular/core'
import {CommonModule} from '@angular/common'

import {SignalStateCountComponent} from './signalStateComponent/signal.state.component';
//import {BookListComponent} from './signalServiceComponent/book-list-service.component';

@Component ({
     selector : 'ngx-signel-st',          
     templateUrl : './signal.component.html',
     styleUrls : ['./signal.component.scss'],
     standalone : true,
     imports : [
                SignalStateCountComponent, 
               // BookListComponent
               ]
})

export class SignalComponent implements OnInit {
  
  ngOnInit() {
  
    console.log('inOnit Signal ');
  }
}