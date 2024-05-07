import { createContext } from "react";

import { Book } from "@/types/bookType";
import { CURRENT_WATCH_BOOK_ACTION, currentWatchBookState, initialCurrentWatchBookState } from "./CurrentWatchBookReducer";

export type CurrentWatchBookActions =
  | { type: CURRENT_WATCH_BOOK_ACTION.ADD; payload: Book }
  | { type: CURRENT_WATCH_BOOK_ACTION.REMOVE }
  | { type: CURRENT_WATCH_BOOK_ACTION.ADD_DESCRIPTION; payload: string}
  | { type: CURRENT_WATCH_BOOK_ACTION.ADD_SUBJECTS; payload: string[]}

export const CurrentWatchBookContext = createContext<{
  currentWatchBookState: currentWatchBookState;
  currentWatchBookDispatch: React.Dispatch<CurrentWatchBookActions>;
}>({
  currentWatchBookState: initialCurrentWatchBookState,
  currentWatchBookDispatch: () => null,
});
