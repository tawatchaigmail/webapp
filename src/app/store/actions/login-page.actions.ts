import {createActin} from '@ngrx/core'

// import {credential} from '..//';

export const login = createAction(
                                '[Login Page] Login',
                                props<{credential : credential}> ()
                     )