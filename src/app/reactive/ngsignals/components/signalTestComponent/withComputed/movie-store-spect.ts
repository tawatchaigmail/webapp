import {MoviesStore} from './movices.store'

describe('MoviesStore', () => {
      it('shuld vsrfy that tree movice are avaiable', () => {
         const store = TestBed.inject(MociceStore);
         expect(store.moviceCount()).toBe(3);
      })
});