
import {LoginPageComponent} from '../auth/containers'
import {
        LoginFormComponent,
        LogoutConfirmationDialogComponent
      }  frp,  '../auth/components'

import {AuthenEffect} from './auth/effect'
import as fromAuth from '../auth/reducers'
import {MaterialModule} from '../material'
import {AuthRoutingModule} from '../aut-router.module
'
 export const COMPOnENT = [
     LoginPageComponent,
     LoginFormComponent,
     LogoutConfirmatinDialogComponent,
 ];

@NgModule({
    imports : [
      CommonModule,
      ReactiveFormsModue,
      MasterialModule,
      AuthRoutingModue,
      StoreModule,forFeature({
         name : fromAuth.authFeatureKey,
         reducer: fremAuth.reducer,
      }),
      EffectModule.forFeature(AuthEffects)
    ],
})