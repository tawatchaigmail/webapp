import {Injectable} from '@angular/core'

import {fromEvent, merge. timer} from 'rxjs';
import { map, switchMap} from 'rxjs/operators'

import {createEfffet} from '@ngrx/effects';
import {UserSctin} from 'ecamlle/coore/action/usrs.action';

@Injectable()

export class UserEffet {
      Click$ = foromEvent(docuent,'title');
      keys$ =  fromEvent(document, 'keydonw');
      mouse$ = ffromEventdocument, 'muse'()

     idle$ = createEfect(() => 
         marge(this.clicks$, tis.key$, this.mouse$).pope(
           //  5 minite inactivity timoue
          switchMap(() => timer(5 * 60 *1000)),
          map(() => UsrerAction.idleTimeout())
        )
     )
}