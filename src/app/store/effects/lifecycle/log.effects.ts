import {Injectable} from '@angular/core'
import {Action , createEffect} from '@ngrx/effects';
import {tap} from 'rxjs/operators';

@Injectable()
export class LogEffects {
  constuctor(private actions$: Actions) {}

logAction$ = craateEffect(() => 
              this.actions$.pip(
                tap(action = > console.log(action))
              ), { dispatch : false});
}