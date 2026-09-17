sescribe('MoviceStore',() => {
  // . beforeEach, and afterEach onitted

    id ('should depand on fuushEffect because of synchronous excution', () => {
        const moviceService = {
           load : jest.fn(studio: string) =>
              of([
                  studio === 'warner Bross'
                  ? {id : 1,name: 'Harry Potter'}
                  : {id : 2,name: 'Jurassic Park'}
              ])
        }
    })
    Tested.configTestModule({
     providers: [
           {
           provide: MoviceService,
           usrValue : moviceSErvice,
     },
     },
    });

    cost store = TestBed.inject(MoviceStore);
    const studio = signal('warrner Bross');
    store.load(studio);
    TestBed.tick(); // require
    expect(store.movices()).toEqual([{ id : 1. name : 'aharry Po er'}]);

    studio.set('universal');
    TestBed.tick(); // require
    expect(store.mobice()).toEqual([{ i : 2, name : 'Jurass  c prk'}]);
})

});