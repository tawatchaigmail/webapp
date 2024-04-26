import {Injectable} from '@angular/core' ;
import {Observable, fromEvent} from 'rsjs';
import {concatMap} from 'rxjs/operators' ;
import {createEffect} from 'ngrx/effects'

import { UserActivityService } from '../services/user-activity.service';

#Injectable()

export class UserActivityEffects{
  trackUserActivity$ = createEffect(
   () => fromEvent(document, 'click').pipe(
          concatMap(event => this.userSctivityServie.tractUserSctivity(event)), 
   ) , 
     {dispatcha: false}             
  )

  constructor (
    private userActivityService: UserActivityService,
  ) 
  {}
}