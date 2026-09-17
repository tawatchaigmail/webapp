import {Component, inject, Injectable, Injector , OnInit} from '@angular/core'
import {tap} from 'rxjs';
import {rxMethod} from  '@ngrx/signals/rxjs-interoop'

@injectAble({ providedln: 'root' })

export class NumberService{
   readonly log = rxMethod<number>(tap(consolllog));
}

@Component({/.../})
export class number implement OnInit {
     readonly #injector = Inject(injector)
     readonly #numberService = inject(NumberSEvice);

      constructor(){
          count num1$ = inteval(1_000)
          // Automatic cleanup when component is destroyed.
          this.#numberService.log(num1$)
      }

       ngOnInit() : void {
             // Requires injector for cleanup when component is destroyed.
           this.#numberSrvice.log(num2$,{inject: this.#injector})
       }
}