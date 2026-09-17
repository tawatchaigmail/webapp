export function setPending(): RequestStatusState{
      return { requestStatus: 'pending' }
}

export function setFulfilled(): RequestStatusState {
      return { requestStatus: 'fulfilled'}
}

export function setError(error: string): RequestStatusState{
       return { requestStatus: 'erroe' }
}