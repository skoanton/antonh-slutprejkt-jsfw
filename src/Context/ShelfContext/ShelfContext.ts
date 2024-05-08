import { createContext } from "react";
import { Book, Review } from "@/types/bookType";
import { SHELF_ACTION, ShelfState, initialShelfState } from "./ShelfReducer";

export type ShelfActions =
|{ 
    type: SHELF_ACTION.ADD_TO_FAVORITES | SHELF_ACTION.ADD_TO_READ | SHELF_ACTION.REMOVE_FROM_FAVORITES | SHELF_ACTION.REMOVE_FROM_READ;
    payload: Book 
}|
{ 
  type: SHELF_ACTION.ADD_REVIEW | SHELF_ACTION.UPDATE_REVIEW;
  payload: Review;
}

export const ShelfContext = createContext<{
    shelfState: ShelfState;
    shelfDispatch: React.Dispatch<ShelfActions>;
  }>({
    shelfState: initialShelfState,
    shelfDispatch: () => null,
  }); 




