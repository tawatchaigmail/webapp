
import {signalStore} from '@ngrx/signals'
import {withSeletEntity} from './with_select_entity'

import {Book} from './intefaceBook'

export const bookStore = signalStore(
   withState({Book : [] as Book[], isLoading: false}),
   // Error: `EntityState` properties (`entityMap` and `ids`) are missing in the `BooksStore`.
    withSelectedEntity(),
)

