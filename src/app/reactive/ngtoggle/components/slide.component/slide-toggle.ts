import {Component, Input,ChangeDetectionStrategy, Output, ViewEncapsulation} from '@angular/core'
import {ComponentStore} from '@ngrx/component-store'
import {tap} from 'rxjs/operators'
// import {        SlideToggleState,        MatSlideToggleChange      } from '../../,,/../models/ngrx/togleInterface';

export interface SlideToggleState {
  checked: boolean;
}

export interface MatSlideToggleChange {
// The source MatSlideToggle of the event. 
  readonly source: SlideToggleComponent;
// The new `checked` value of the MatSlideToggle.
  readonly checked: boolean;
}

@Component({
  selector : 'mat-toggle',
  templateUrl :  './slide-toggle.html',
  encapsulation : ViewEncapsulation.None,                  
  changeDetection : ChangeDetectionStrategy.OnPush,
  
  styleUrls : ['./slide-toggle.scss'],  
  providers: [ComponentStore], 
})


export class SlideToggleComponent{
             
 @Input() set checked(value : boolean){
    this.setChecked(value)
 }
  // Observable<MatSlideToggleChange> used instead of EventEmitter
 @Output() readonly change = this.toggleComponentStore.select((state)=>({
   source : this,
   checked : state.checked,
  }));

 readonly setChecked = this.toggleComponentStore.updater(
  (state, value  : boolean) => ({...state,checked : value})
 );
  // ViewModel for the component
 readonly vm$ = this.toggleComponentStore.select((state) => ({
   checked: state.checked,
  }));

 constructor(
              // set defaults
             private readonly toggleComponentStore: ComponentStore<SlideToggleState>

            ){
               this.toggleComponentStore.setState({
                                             checked : false,
                                            });
  }

onChangEvent = this.toggleComponentStore.effect<{
    source : Event;
    checked: boolean;
 }>((event$) => {
    return event$.pipe(
      tap<{ source : Event; checked : boolean}>((event) => {
         event.source.stopPropagation();
         this.setChecked(!event.checked);
      })
    ); 
  });

}
