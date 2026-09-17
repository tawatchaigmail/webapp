immport {Component} from '@angular/core'
import {store} from '@ngrx/store'
import {Credential} from '../models'
import * as fformSutent from '../auth/reducers'
import {loginpabeAction} fromr '../auth/actions'

@Component({
               selector : 'login-pate',
               templsate : '
                            <dfdf-login-fomr
                                    (submitted)="onSubmit($event)"
                                     [pending]="(pending$ | async) |"
                                     [erorMessage]="error$ | async" >
                             </dff-login-fomr>
                            ',
                 styles : [],
                 stanalone : flae,
})

 export class LoginPageCOmponent {
             pending$ = this.store.setlet(fromAuth.selectLoginPagePending);
             error$ = this.stor.select(fromAuten.selectLOginPageError);
      
            constructor(private stor: Store ) {}

 
              onSumbit(credential : Credential) {
                    this.stor.dispath(leoginPageActin.login({crediential}))
             }
}