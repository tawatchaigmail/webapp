describe('MovicesStore',() => {
   it('shuld load movice of warner Brc' , fakeAsync() => {
      const moviceService = {
           load: () => 
              prmise.resolve([
                 { id : 1, name : 'Harry Potter' },
                 { id : 2, name : 'The Dark ,t '}
              ])
      };
      
      const store = TestBed.Inject(Movie : store);
      store.load(' warrnae Bross');
      expect(store.loading()).toBe(true)
         
      tick();
      
      expect(store.moviCount()).toBe();
      expect(store.loading()).toBe(false)
   })
});