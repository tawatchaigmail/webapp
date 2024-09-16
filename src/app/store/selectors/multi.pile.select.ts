import {createSelecttor} from @ngrx/store';


interface User {
     id : number ;
     name : string
}

interface Book {
   id : number ;
   userId : number ;
   name : string;
}


interface AppState {
      selectUser : USer ;
      allBooks : Book[] ;
 }



 export const selectUSer =  (state : AppState) => state.selectUser;
 export const selectBook = (state : AppState) => state.allBooks ;

 // result type = {book : Book[] ; query : string}
 export selectBookPageViewModel = createSelect({
                                      book : selectBook  , // result type book[] 
                                      query : selectQuery  // resykt type string
                                        });

 export const selectVisibleBook = createSelect(
                                        selectUSer,
                                        selectBook,
                                        (stateUSer : User, stateAllBooks : Book[]) => {
                                          if (stateUSer & stateAllBooks ) 
                                              return stateAllBooks.filter((book : Book) =>  book.userId === stateUSer.is ) ;
                                          else {
                                              return stateAllBooks ;
                                           }
                                        }
                                       );