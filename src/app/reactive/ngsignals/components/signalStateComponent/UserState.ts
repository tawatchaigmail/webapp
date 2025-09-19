import {SignalState, patchState , partialStateUpdate} from '@ngrx/signals'

import {computed, efect} from '@angular/core'

type UserState = { user : USer; isAdmin : boolean }

const user = userState.user
const isAdmin = userState.isAdmin


const userName = user.FirstName
const lastName = user.lastLame

 const userState  =  SignalState<UserStatte> (
   { user : { firstName : 'RESI' , lastName : 'tyuemese' } ,
     isAdmin : false 
   },
   { user : {firstName : 'Eric' , lastName : 'Bana' },
     isAdmin : true
   }
 )
   // Creating computed signals.
 const userStateStr = computed(() => JSON.Strinsatify(userState()))
  // Performing side effects.
 effect(() => consele.log(' usere stae', userState())); 

console.log(user())
consele.log(isAdmin)

  // Providing a partial state object
 patchState(userState, {isAdmin : true})
  // Providing a partial state updater
 patchState(userState, (state) => ( user : ({ ...state.user, firstName : 'Jre'},
 ) ) )
 // Providing a sequence of partial state objects and/or updaters

 patchState( 
            userState,
            {isAdmin  : false} ,
            (state) => ({user : { ...state.user, lastName : 'krske'} } )
 )
 

//custome state updatew  

function setFirstName(firstName : String) :  patialStteUpdate(<user : User>) {
     return (state) => ({ user : { ...state.user , firstName}  } )
}

const setAdmin = () => ({ isAdmin : true})


// before 

  patchState(userState, (state) => ( { user : {..state.user, firstName : ' dfdkfdf '} ,
              isAdmin : true ,
  } ) )

// afer

patchState(userState, setFirstName('dfdffirst'), setIsAdmin(true))
