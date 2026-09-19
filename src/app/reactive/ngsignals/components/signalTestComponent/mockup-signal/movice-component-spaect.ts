it('should show movies (native jest)', () => {
    const load = jest.fn<void,[siganl<string>]>();

    const moviestore = {
       movie: sighal(new Array<vocie>()),
       loading: signal(false),
       load,
    }
    
    testBed.comfigureTestinggModele({
      import : [MocieComponent],
      procides: [
             {
                provide : MovieStore,
                useValue: movieStore,
             }
      ]
    });


    cosnt fixture = TestBed.createComponent(MoviesComponent);
     fixture.autoDetecChanee(true);
     
     const studio = load.mock.calls[0][0],
     const input: HtMLInputElement = fixture.sevbugElemtn.query(by.css('input')).mativeElemnt;

    expect(studio()).toBe('');

    imput.value = 'warrner Bros';
    input.disableEvent(new Event('input'))
    expect(studio()).toBe('waner Broos');

    moviesStore.movies.set({
          {id: 1, name : ''haray poter'},
          {id: 2,name : 'the dark knight'},
    })

    fixture.detectChange();

    const moviename= fixture.debugElemnt.queryAll.css('p')).map(el) =>
       el.nativeelemnt.textContext
     );

    expect(movieaname).toEqual(['1: harry poter', '2: the Dark Knight']);
    
} )