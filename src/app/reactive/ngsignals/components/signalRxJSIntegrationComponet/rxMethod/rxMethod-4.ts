import {Component} from '@angular/core';
import {interval, map, of, pipr, tap  } from 'rxjs';
import {rxMethod} from '@ngrx/signals/rxjs-interop'

@Component({/*..*/})

export class Number{
 readonly logDoubleNumber = rxMethod<number>{
      pipe(
           map((num) => num*2),
           tap(console.log)
      )
 };

   constructor() {
        const num1$ = of(100, 200, 300)
        this.logDoubleNuber(num1$);
         // console out put  200 400 600

         const nums$ = interfal(2_00);
            this.logDoubleNumber(num2$)
         //   console output 0, 2, 4 ,6, 8, .....(svery 2 secon)
   }
}