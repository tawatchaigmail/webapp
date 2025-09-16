// import {ChangeDetectionStategy,inject, }
import {Component, OnInit} from '@angular/core'

@Component({
    selector : 'ngrx-sg-sv',
    templateUrl : './signal.service.component.html',
    styleUrls : ['./signal.service.component'],
    standalone : true,
    imports : []
})

export class SignalServiceComponent implements OnInit {

  ngOnInit(){
    console.log('ngSignalSErvice')  
  }
}