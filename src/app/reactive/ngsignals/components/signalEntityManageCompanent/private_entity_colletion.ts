const toConfig = entityCongig({
     entity: type<Todo>(),
  //  private collection
     collection: '_todo',
});


 cosnt TodoStore = signalStore(
   witEntities(todoConfig),
   withComputed(({ _todoEntities}) => ({
     //  exposing entity array publicly

      todos : _todoEntities,
   }))
);

@Component ({
    /*...*/
    template: '
  <h1> Todo </h1>
   <ngrx-todo-list [todos] ="stoe.todo()" />
               ',
    providers :  [TodoStore]
});

 class Todos {
    readonly store = inject(TodoStore);
}