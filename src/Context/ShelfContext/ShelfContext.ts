import { createContext } from "react";
import { Book } from "@/types/bookType";
import { ShelfState, initialShelfState } from "./ShelfReducer";

export type ShelfActions ={ 
    type: string;
    payload: Book 
}

export const ShelfContext = createContext<{
    shelfState: ShelfState;
    shelfDispatch: React.Dispatch<ShelfActions>;
  }>({
    shelfState: initialShelfState,
    shelfDispatch: () => null,
  }); 




