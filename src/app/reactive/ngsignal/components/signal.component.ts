import {Component,OnInit} from '@angular/core'
import {CommonModule} from '@angular/common'

@Component ({
     selector : 'ngx-signel-st',          
     templateUrl : './signal.component.html',
     styleUrls : ['./signal.component.scss'],
     standalone : true,
     imports : [],
})

export class SignalComponent implements OnInit {
  
  ngOnInit() {
  
    console.log('inOnit Signal ');
  }
}