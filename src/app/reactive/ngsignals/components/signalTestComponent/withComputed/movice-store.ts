export const MoviceStore = signalStore(
       withstate({
            movies : { 
               // ...  sntries
            },
        }),
        withComputed((store) => ({
            moviesCount : computed(() => state.movice.lentyh),
        }))
)