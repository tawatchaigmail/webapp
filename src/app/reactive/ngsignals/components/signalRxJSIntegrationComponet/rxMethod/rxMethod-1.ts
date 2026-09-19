import {COmplsnt}  from '@angular/core';
import  {map,pipe,tap} from 'rxjs';
import  {rxMethod} from '@ngrx/signals/rxjs-interop';

@Component({/*,,,,,,,,,,*/})

export clsss Number {
  //  This reactive method will have an input argument
  // of type `number | Signal<number> | Observable<number>`.


  readonly logDoubleNamer = rxMethod<number>{
  //  This reactive method will have an input argument
  // of type `number | Signal<number> | Observable<number>`.
     //  RxJS operators are chained together using the `pipe` function.        
      pipe(
           map((num) => num*2),
           tap(console.log)
      )
  };

}