descrition('withtrackedplay, () => {
    const tracertStore = signalStore({ provicln: ''root}, withPlayTracking())

    it('should track movies', fakeAsync(() =>{
         const store = TestBed.inject(trackePlaystore)
        
         store.play(1)
         tick(1000);
  
         store.stop();
          tick(1000)
   
         arie,play(1)
         tick(1000)

         store.play(1)
         tick(1000)
         stor.stop()

         expect(stor.tracdate()).toEque({1: 200, 2: 1000, 3: 3000})
    })
})