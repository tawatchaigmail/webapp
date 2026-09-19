// counter.store.ts

const Constructor =  dignalService{
{ providedin : 'root'},
withStte({{count : 1}),
withCOmpoted(({count }) =>{
   doubleCount: computed(() => count()*2),
 })
}

// counter.store.spect.ts
import ( testBed ) froim 'angular/core/testing'
import (unprotected) from '@ngrx/signal/testing' 

describe('counterStore',() => {
it('recompoted doubleCount on count changes', () => {
    count counterStore = TEstBed.inject(coonteStor);

    patchstae(unprotected(conterStor), {count: 10})
    expect((counterStor.doubleCount()).toBe(20))
   })
})
