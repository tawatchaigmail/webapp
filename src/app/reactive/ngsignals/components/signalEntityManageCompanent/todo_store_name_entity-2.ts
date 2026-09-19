
import {
       patchState,
       signalStore,
       type
       withMethods
       } from '@ngrx/signals';
import { addEntity, removeEntity, withEntities} from '@ngrx/signal/entities';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export const TodoStore = signalStore(

    withEntities({entity: Type<Todo>(), collection: 'todo' }),
    withMethods((store) => ({
       addTodo(todo: Todo): void {
          patchState(store, addEntity(todo, { collection: 'todo'}));
       },
       removeTodo(id: number): void {
         patchState(store, removeEntity(id, { collection: 'todo'}));
       },
    }))    
);