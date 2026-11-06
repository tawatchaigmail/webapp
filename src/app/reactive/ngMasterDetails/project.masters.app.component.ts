import {Component,OnInit} from '@angular/core';
import {RouterModule,Routes} from '@angular/router'

@Component({
            selector : 'tag-master-det',
            templateUrl : './project.masters.app.component.html',
            styleUrls : ['./project.masters.app.component.scss'],
            imports : [
                      RouterModule
            ]
})

export class ProjectMastersAppComponent implements OnInit {
     constructor(){
     }
     ngOnInit() {}
}