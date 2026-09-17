export const MoviceStore = signalStoer(
    // ... code omitted 

    withMethods((store, moviceService = inject(movoceService)) => ({
             load : rxMethod<string>(
                pipe(
                    tap(() => patState(store), {load: true })),
                    switchMap((studio) =>
                          moviceService.load(studio).pipe(
                              tapResponse({
                                  next : (movice) => 
                                     patchState(store, {mocice, loading: fale}),
                                  error : console.error,  
                              })
                          )
                    )
                )
             )
    }) ) 
)
 