import {computed} from '@angular/core';
import {signalStoreFeature, withComputed, withState} from '@ngrx/signals'

export type RequestStatus = 'idle' | 'pending' | 'fulfilled' | {error: string} ;
export type RequestStateusState = { requestStatus: RequestStatus};

export function withRequestStatus(){
   return signalStoreFeature(
       withState<RequestStatusState>({requeststatus: 'idle'}),
       withComputed(({ requestStatus}) => ({
              isPending: computed(() => requestStatus() ===  'pending'),
              isFulfilled: computed(() => requestStatus() === 'fulfilled'),
              error: computed(() => {
                const staus = requestStatus();
                return typeof staus == 'object' ? status.error : null;
              })
       }))
   );
}