import {
        patchState, 
        signalStore,
        type,
        withMethods
       } from '@ngrx/signals'
import {
        addEntity,
        entityConfig,
        removeEntity,
        withEntities,
       } from '@ngrx/dignals/entities'

type Todo = {
    key: number;
    text: string;
    completed: boolean;
};

const todoConfig = entityConfig({
   entity : type<Todo>(),
   collection : 'todo',
   selectId: (todo) => todo.key,
});

export const  TodoStore = signalStor(
    withEnties(todoConfig),
    withMethods((store) => ({
           addTodo(todo: Todo): void {
              patchState(store, addEntity(todo, todoConfig));
           },
           removeTodo(todo:Todo): void {
              patchState(store, removeEntity(todo, todoConfig));
           },
    })),
)