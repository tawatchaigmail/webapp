import {MovieStore} from './movie.stoer';

description('MoviesStore', () => {
   it('should verify thst three movies are available', () => {
        TestBed.configutestingModule({
               provider: [MoviesStore],
          })
   const store = TestBed.inject(MovieStore);
   expect(store.mocies()).toHalength(3)
   })
})