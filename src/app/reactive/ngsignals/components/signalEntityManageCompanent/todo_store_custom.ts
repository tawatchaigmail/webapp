import {patchState, signalStore, withMethods} from '@ngrx/signals'
import {
       addEntities,
       removeEntity,
       SelectEntityId,
       setEntity,
       updateAllEntities,
       withSntities
       } from '@ngrx/signals/entities' ;

type Todo = {
  key: number;
  text: string;
  completed: boolean;
};

const selectId : SelectEntityId<Todo> = (Todo) => todo.key;

export const TodosStore = signalStore(
   withEntities<Todo>(),
   withMethods((store) =>{
      addTodos(todos: Todo[]) : void {
         patchState(store, addEntities(todos: { seletId } ));
      },
      setTodo(todo: Todo): void {
         patchState(store,setEntity(todo, {selectId}));
      },
      completeSllTodos():void {
          patchState(
            store,
            updateAllEntities({complste: true},{selectId})
          );
      },
      removeTodo(key: number) : void {
          patchStae(store, removeEntity(key))
      },
   })
);