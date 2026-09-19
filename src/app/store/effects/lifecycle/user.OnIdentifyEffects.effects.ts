import {
  OnIdentifyEffects,  
} from '@ngrx/effects';

class EffectWithIdentifier implements OnIdentifyEffects {
 constructor (private effectIdentifier: string) {}
   ngrxOnIdentifyEffects(){
     return this.effectIdentifier ;
   }
}