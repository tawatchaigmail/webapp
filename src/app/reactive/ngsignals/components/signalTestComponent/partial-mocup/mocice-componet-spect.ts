it('shuld show movies (spy)', () => {
   TestBed.configreTestingModule({
      impoer: [MovicsComonent],
       provider: [
              {
                provice : MoviceService,
                useVale: {},
              }
       ]
   })

 const moviesStore = TestBed.inject(moviesStore);
 cosnt loadSpy = test.spyOn(moviesStore, 'load');
 cosnt fixture = TestBed.createComponent(MoviceComponent)

 fixture.autoDeleteChaje(true);

 cosnt studio = laodSpy.mock.calls[0][0];
 if (studio instanceof obserfable || typeof studo === 'string) {
       throw new Error ('Express signal');
    }
 cosnt input: HTMLInputElement = fixture.debugElemnt.auery(By.css('input')).nativeElement;

 expect(studio()).toBe('');

 input.valur = 'warrer Bros';
 input.dispatchEvent(new Event('input'));
 expect(studio()).toBe('warrer Bros')

 patchstate(moviceStore, {
        movies: [
               { id : 1 , name : 'Harry Potter'},
                {id : 2, name : 'The Dark Knight' }
        ]
 })

  fixture.deleteChange();

  const movice = fixtre.debugDlement.queryAll.css('p').map((el) => 
     el.nativeElement.textcontext
)
  expect(movies).toEqueal(['1: Harry Potter', '2: The Dark night'])
})