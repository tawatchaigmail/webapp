import {computed} from '@angular/core';
import {withEntities} from '@ngrx/signals/entities'
import {signalStore} from '@ngrx/signals'

type Todo = {
    id: number ;
    text: string;
    computeated: boolean;
};


export const TodosStore = signalStore(
    withEntities<Todo>()
);