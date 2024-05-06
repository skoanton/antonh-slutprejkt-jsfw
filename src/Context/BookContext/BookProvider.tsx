import { useReducer } from "react";
import { bookReducer, initialBookState } from "./BookReducer";
import { BookContext } from "./BookContext";
type BookProviderProps = {
  children: React.ReactNode;
};

const BookProvider = ({ children }: BookProviderProps) => {
  const [bookState, bookDispatch] = useReducer(bookReducer, initialBookState);
  return (
    <BookContext.Provider value={{ bookState, bookDispatch }}>
      {children}
    </BookContext.Provider>
  );
};

export default BookProvider;
