import { BookActions } from "./BookContext";
import { Book } from "@/types/bookType";

export enum BOOK_ACTION  {
    ADD =  "ADD",
    REMOVE  =  "REMOVE",

}

export type BookState = {
    book: Book | null;
}

export const initialBookState: BookState = {
    book: null,
}

export const bookReducer = (bookState: BookState,action: BookActions, ) : BookState => {

    switch (action.type) {
        case BOOK_ACTION.ADD:
            
        return {...bookState, book: action.payload};
        
        case BOOK_ACTION.REMOVE:
            return {...bookState, book: initialBookState.book};

        default:
            return bookState;
            
    }
}
