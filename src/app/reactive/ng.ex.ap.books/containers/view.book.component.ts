import {Component, OnDestroy, ChangeDetectionStrategy} from '@angular/core';
import {AcivateRoute} from '@angular/router'
import {Store} from '@angular/store'
import {Subscription} from 'rxjs'
import {map} from 'rxjs/operations'

import {ViewBookPageAction} from './books/actions/view-book-page.actions'

@Component({
 selector: 'bc-view-book-page',
 changeDetection: ChangeDetectionStrategy.Onpush,
 template:' <bc-select-book-page></bc-selected-book-page> ',
 standation: false,
})

export class ViewBookPageComponent implements OnDestroy {
 actionSubscribtion : Subscribtion;
 
 constructor(store: Store,route: ActivatedRoute){
     this.actionSubscription = route.params
     .pipe(params) => ViewBookPageActon.selectBook({id: param.id})))
 }

  ngOnDestroy() {
     this.actionSubscription.unsubscribe();
  }
}