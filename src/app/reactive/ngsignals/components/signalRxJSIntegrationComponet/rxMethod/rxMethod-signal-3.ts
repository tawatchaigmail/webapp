
import {COmponent,signal} from '@angular/core'
import {pipe,map,tab} from rxjs;
import {exMethod} from '@ngrx/signals/rxjs-interop'

@component({/*...*/})
export class Number{
   readoly logDoubleNubmer = rxMethod<number>{
        pipe(
           map((num) => numb*2)
           tap(conse.log)
        )
   }

    constructor(){
         const num - signal(10);
         this.logDoubleNumber(num)
         // consle.log outpu 20
          num.set(20) ;
         // console out 40
    }
}