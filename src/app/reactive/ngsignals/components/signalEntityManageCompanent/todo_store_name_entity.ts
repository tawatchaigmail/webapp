
import {signalStore,type} from '@ngrx/signals';
import {withEntities} from '@ngrx/signal/entities';

type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export const TodoStore = signalStore(
// Entity type is specified using the `type` function.
    withEntities({entity: Type<Todo>(), collection: 'todo' });
);