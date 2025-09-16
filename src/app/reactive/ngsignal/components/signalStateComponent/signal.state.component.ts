import {ChangeDetectionStrategy,Component, OnInit} from '@angular/core'
import {initiStore, signalState , patchState} from '@ngrx/signals'

@Component({
              selector : 'ngx-state-count',
              templateUrl : './signal.state.component.html',
              styleUrls : ['./signal.state.component.scss'],
              changeDetection : ChangeDetectionStrategy.OnPush  ,
})

export class SignalStateCountComponent implements OnInit {
   readonly state =  signalState({count : 0})
  // const bookStore : StoreSignal = initialStore() 
   

  ngOnInit(){

    console.log('state count');
  }

  increment() : void { patchState(this.state, (state) => ({ count : state.count + 1 }));
  }

  decrement() : void { patchState(this.state, (state) => ({ count : state.count - 1 }));
  } 

  reSet() :void { patchState( this.state, ({count : 0}));
  }
}