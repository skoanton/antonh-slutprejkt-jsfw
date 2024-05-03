import { createContext } from "react";
import { BOOK_ACTION, BookState, initalBookState } from "./BookReducer";
import { TitleSearchResult } from "@/types/searchTypes";

export type BookActions =
  | { type: BOOK_ACTION.ADD; payload: TitleSearchResult }
  | { type: BOOK_ACTION.REMOVE };

export const BookContext = createContext<{
  bookState: BookState;
  bookReducer: React.Dispatch<BookActions>;
}>({
  bookState: initalBookState,
  bookReducer: () => null,
});
