import { Book } from "@/types/bookType"
import { ShelfActions } from "./ShelfContext"


export enum SHELF_ACTION  {
    ADD_TO_FAVORITES =  "ADD_TO_FAVORITES",
    REMOVE_FROM_FAVORITES  =  "REMOVE_FROM_FAVORITES",
    ADD_TO_READ = "ADD_TO_READ",
    REMOVE_FROM_READ = "REMOVE_FROM_READ"
}

export type ShelfState = {
    favorites: Book[],
    readBooks: Book[]
}

export const initialShelfState = {
    favorites: [],
    readBooks: []
}

export const shelfReducer = (shelfState: ShelfState, action: ShelfActions) : ShelfState => {

    switch (action.type) {
    case SHELF_ACTION.ADD_TO_FAVORITES:

    return {...shelfState, favorites: [...shelfState.favorites,action.payload] }
            
    case SHELF_ACTION.REMOVE_FROM_FAVORITES:
        const updatedFavorites = shelfState.favorites.filter((book) => book.id != action.payload.id );
        
        return {...shelfState, favorites: updatedFavorites};
    case SHELF_ACTION.ADD_TO_READ:
        return shelfState;
    case SHELF_ACTION.REMOVE_FROM_READ:
        return shelfState;
        default:
           return shelfState;
    }
}