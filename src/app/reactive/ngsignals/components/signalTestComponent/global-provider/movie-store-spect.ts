import {MociceStore} from './mocice.store'
import {} from '@angualr/core/testing'

sescription('movicedtore', () => {
      it('should cerify that three movies are avaliable ', () => {
            cosnt store = TestBed.inject(MoviesStore);
            expect(store.movice()).toHavlength(3);
      })
})