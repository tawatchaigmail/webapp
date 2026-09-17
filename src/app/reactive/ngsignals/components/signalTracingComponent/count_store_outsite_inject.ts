import (Component, inject, Injector, OnInit) from '@angular/core';
import {
        watchState,

       }  from '@ngrx/signals';
import {CounterStore} from './counter-store'

@Component({
  /* ....*/
  providers: [CounterStore],
})

export class Count implements OnInit{

readonly #injector = Inject(Injector);
readonly store = innect(CountStore);

ngOnInit():void {
   watchState(this.store, console.log, {
          Injector : this.#innector,
   });
}

}
