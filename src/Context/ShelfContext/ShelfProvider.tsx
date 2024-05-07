import React, { useReducer } from "react";
import { ShelfContext } from "./ShelfContext";
import { initialShelfState, shelfReducer } from "./ShelfReducer";

type ShelfProviderProps = {
  children: React.ReactNode;
};

const ShelfProvider = ({ children }: ShelfProviderProps) => {
  const [shelfState, shelfDispatch] = useReducer(
    shelfReducer,
    initialShelfState
  );
  return (
    <ShelfContext.Provider value={{ shelfState, shelfDispatch }}>
      {children}
    </ShelfContext.Provider>
  );
};

export default ShelfProvider;
