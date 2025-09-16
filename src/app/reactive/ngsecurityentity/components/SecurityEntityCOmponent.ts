import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

@Component({
           selector : 'secEn',
           templateUrl : './securityEntityCOmponent.html',
           styleUrls : ['./securityEntityCOmponent.scss']
           })

export class SecurityEntityCOmponent implements OnInit {

       constructor(private store : Store) {} ;

       ngOnInit(){
                     console.log('SecurityEntityCOmponent');
       }

}