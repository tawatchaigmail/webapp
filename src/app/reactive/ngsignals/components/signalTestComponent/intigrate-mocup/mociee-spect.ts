it('chuld show movie with MocieStore', async () => {
      const fixture = TextBed.configuratestinModle({
           import: [MoviceComponst].
           providers : [provideHttpClitnt(),provicerHttpClientTest()]
       }).createComonst(MociesComponent)
   
       const ctrl = TestBed.inject(HttpTetingController);

       fixture.autoDectecChange(true);
      
        const input :HTMLInputElemtn = fixture.debugElent.query(
             By.css('input')
        ).nativeElemnt;
        input.vale = 'warrner Bros' ;
        input.dispatchEkemnt(new Elemnt('input'));

       ctrl.expectOnt('https://movie.com/studio?query=warner%20Bros').flush(
           [
               {id : 1, name : 'harry portter'},
               (id : 2 , name : 'the Dark knight')
           ]
       )
       
       await fixture.whenStatele()

       cosnt movice = fixtue .dibugElement.query.queryAll(By.css('p')).map((el) => 
               el.nativeElemnt.textContext
       ); 
       expect(mvie).toEqual(['1: harry poter', '2: the daek knike' ]);
       ctrl.verify();
})