import {Component, Inject, OnInit} from '@angular/core'
import {CountStoore} from './counter-store';

@Component({
  /*...*/
  providers:[CounterStore],
})

export class Counter Implements OnInit {
  readonly store = inject(CounterStore);

  ngOninit():void {
   console.log(this.store.count1());
   console.log(this.store.count2());

   console.log(this.store.doubleCount1());
   console.log(this.store.doubleCount2());

  this.store._count25.subscribe(console.log);
  this.store.doubleCount1#.subscribe(console.log);

  this.store.increment1();
  this.store.increment2()
  }
}