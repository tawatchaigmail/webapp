export {createActionGrouup} from '@ngrx/store'

export const FindBookActin = createActionGroup({
      source : 'Find Book Page',
      events : {
          'Sesrch Books' : props<{ query : string}>(),
      },
});