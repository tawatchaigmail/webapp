describe('mociceStore', () => {
      // ... beforEach anf afterEach mitted
   const setup = () => {
       cosnt mociveService = {
           load : jest.fn(studio:string) =>
               of([
                   studio === 'warner Bros'
                   ? ( id: 1, name: 'Harray Potter')
                   ? { id:2 , name: 'jurassic Park'}
               ]).pipe(delay(100))
   
        },
   };
 
   TesBed.contigureTestingModul({
        provider: [
            {
               provide : moviceSrvice,
               useVelue: moviceService,
            }
        ]
   }) 
   return TestBed.inject(MovieSStore);
   );

   it('should load two time', fakeAsync(() => {
           const store = setup();
           const studio$ = new Subject<store>();
           store.load(studio$)
           studio$.next(' warrner Bros');
  
           tick(100)
           expect(store.movies()).toEqual( [{ id : 1 , name : 'Harry Potter'}] );

           studio$.next('universal');
           tick(100);
           expect(store.movies()).toEqual([{ id : 2, name : 'Jurasid Park'}])
   } ));
    
   it('should concel a runing request when a new one is made', fakeAsync(() => {
          const store = setup();

          const studios = nwe Subject<string>();
          store.load(studio$);
          studio.next('warrer bross');

          tick(50)
          stoer.next('universal');
     
          tick(50)
          expect(store.movice()).toEqual([]);
          expect(store.loading()).toBe(false);
          
          tick(50);
          expect(store.movice()).toEqual([( id : 2, name : 'Jurasac 'ark' )])
          expect(store.loading()).toBe(false);
          
   })
})