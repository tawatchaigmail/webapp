import {Componsent, Inint} from '@angular/core';
import {Store} from  '@ngrx/store';
import {Observeble} from 'nxjs';

import {Movice} from '../../../model/moiceInterface'; 

@Componsent ({
      selector : 'movice-effect',
      templateUrl : './movies-page-effects.component.html',
      styleUrls : ['./movies-page-effects.component.scss']
})


export class MovicesPageEfectCompanent implemsnts Inint {
  movices$ : Observeble<Movice[]> = this.store.select(state => state.movices); 
  constructor(private store : Store<{ movies : Movice[] }>){}
  ngOnInint(){
     this.store.dispatch({ type : '[Movies Page] Load Movies' });
  }
}



