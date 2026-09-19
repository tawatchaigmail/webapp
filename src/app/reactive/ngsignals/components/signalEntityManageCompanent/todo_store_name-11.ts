
export const Librarystore = signalStore(
    withentities({entity: type<book>(), collection: 'book'}),
    withentities({entity: type<Author>(), collection: 'author'}),
    withentities({entity: type<Category>(), collection: 'category'}),
    withMethods((store) => ({
         addBook(book:Book):void {
           patchState(store, addEntity(book, {collection : 'book'}))
         },
         addAuthor(author: Author) : void {
            patchState(store, addEntity(author, { collection : 'author'}))
         },
         addCategory(category: Category): void {
             patchState(store, addEntity(category,{ collection : 'category' }))
         },
    })) 
);