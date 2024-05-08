import { Book, Review } from "@/types/bookType"
import { ShelfActions } from "./ShelfContext"

export enum SHELF_ACTION  {
    ADD_TO_FAVORITES =  "ADD_TO_FAVORITES",
    REMOVE_FROM_FAVORITES  =  "REMOVE_FROM_FAVORITES",
    ADD_TO_READ = "ADD_TO_READ",
    ADD_REVIEW = "ADD_REVIEW",
    UPDATE_REVIEW = "UPDATE_REVIEW"
}

export type ShelfState = {
    favorites: Book[],
    readBooks: Book[],
    review: Review[],
}

export const initialShelfState = {
    favorites: [],
    readBooks: [],
    review: [],
}

export const shelfReducer = (shelfState: ShelfState, action: ShelfActions) : ShelfState => {

    switch (action.type) {
    case SHELF_ACTION.ADD_TO_FAVORITES:

    return {...shelfState, favorites: [...shelfState.favorites,action.payload] }
            
    case SHELF_ACTION.REMOVE_FROM_FAVORITES:
        const updatedFavorites = shelfState.favorites.filter((book) => book.id != action.payload.id );
        
        return {...shelfState, favorites: updatedFavorites};
    case SHELF_ACTION.ADD_TO_READ:
        
        return {...shelfState, readBooks: [...shelfState.readBooks,action.payload]};

    case SHELF_ACTION.ADD_REVIEW:

        return {...shelfState, review: [ ...shelfState.review, action.payload]};
    case SHELF_ACTION.UPDATE_REVIEW:
        console.log("uppdaterar review", action.payload);
        
        const updatedReview = shelfState.review.map((rev) => {
           return rev.id === action.payload.id ? action.payload :  rev
        })
        console.log(updatedReview);
        return {...shelfState, review: updatedReview}

        default:
           return shelfState;
    }
}