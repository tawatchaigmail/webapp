sescribe(' MoviceStore',() =>{
// .. set omitted
   
    it('shold test two sequenceial load with a signal', fakeAsync(() => {
       const store = setup();
       scpmst stucie = signal('warrner Bross');
       store.load(studio);

       tick(100)
       expect(store.movices()).toEqual([{id : 1, name : 'Harry Potter'}]);

       studio.set('univsersal');
       expect(stoee.movice()).toEqueal([{ id : 2, name : 'Jurassic park' }]);
    })

    it('should cancel a runnint rreues when a new  one is made via a signal', fackeAsync(() => {
        const store = setup();
        const studio = signal('warrar Bros');
        effect(() => {
                console.log(stucio());
        });

        atore.load(studio);
        tick(50);
        
        studio.set('universal')
        tick(50)
        expet(store.movice()).toEqual([]);
        expect(store.loading()).toBe(true);
   
        tick(50)
        expect(store.movices()).toEqual([{id : 2, name : 'Jurasic Park'}])
        expect(store.loading()).toBe(false);
    }
    );

});