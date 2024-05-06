import { createContext } from "react";
import { BOOK_ACTION, BookState, initialBookState } from "./BookReducer";
import { Book } from "@/types/bookType";

export type BookActions =
  | { type: BOOK_ACTION.ADD; payload: Book }
  | { type: BOOK_ACTION.REMOVE };

export const BookContext = createContext<{
  bookState: BookState;
  bookDispatch: React.Dispatch<BookActions>;
}>({
  bookState: initialBookState,
  bookDispatch: () => null,
});
