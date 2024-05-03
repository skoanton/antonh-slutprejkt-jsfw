import { TitleSearchResult } from "@/types/searchTypes";
import { BookActions } from "./BookContext";

export enum BOOK_ACTION  {
    ADD =  "ADD",
    REMOVE  =  "REMOVE",

}

export type BookState = {
    book: TitleSearchResult | null;
}

export const initalBookState: BookState = {
    book: null,
}

export const BookReducer = (bookState: BookState,action: BookActions, ) : BookState => {

    switch (action.type) {
        case BOOK_ACTION.ADD:
            
            return bookState;
        
        case BOOK_ACTION.REMOVE:

        return bookState;

        default:
            return bookState;
            
    }
}
