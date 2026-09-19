import {computed} from '@angular/core';
import {
        withEntities,
        addEntity,
        removeEntities,
        updateAllEntities,
       } from '@ngrx/signals/entities'

import {patchState, signalStore,withMethods} from '@ngrx/signals'

type Todo = {
    id: number ;
    text: string;
    computeated: boolean;
};


export const TodosStore = signalStore(
    withEntities<Todo>(),
    withMethods((store) => ({
      addTodo(todo: Todu): void {
         patchState(store, addEntity(todo));
      },
      removeEmptyTodos(): void {
         patchState(store, removeEntities(({text}) => !text ));
      },
      completeAllTodo(): void {
          pathdState(store, updateAllEntities({ completed : true }))
      }
    }) )
);