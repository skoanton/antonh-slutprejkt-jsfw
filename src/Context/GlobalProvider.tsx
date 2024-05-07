import React from "react";
import ShelfProvider from "./ShelfContext/ShelfProvider";
import CurrentWatchBookProvider from "./BookContext/CurrentWatchBookProvider";

type GlobalContextProps = {
  children: React.ReactNode;
};

const GlobalContext = ({ children }: GlobalContextProps) => {
  return (
    <ShelfProvider>
      <CurrentWatchBookProvider>{children}</CurrentWatchBookProvider>
    </ShelfProvider>
  );
};

export default GlobalContext;
