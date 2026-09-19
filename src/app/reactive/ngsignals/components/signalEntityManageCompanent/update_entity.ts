// update entities by IDs
patchState(
    store,
    updateEntities(ids: [1, 2], change: {completed: true})
);

patchState(
   store,
   updateEntities({
     iDs: [1, 2],
     changes: (todo) => ({completed: |todo.completed }),
   })
);

// update entities by predicate
patchState(
    store,
    updateEntities({
      predicate: ({text }) => text.endsWith('?'),
      changes: {text: ''},
    })
);

patcnState(
  store,
  updateEntities({
     predicate: ({text} => text.endsWith('?'),
     change : (todo) => ({text: todo.text.slice(0,1) }),
     )
  })
);