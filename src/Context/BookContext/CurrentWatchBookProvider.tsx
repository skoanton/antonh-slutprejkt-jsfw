import { useReducer } from "react";
import {
  currentWatchBookReducer,
  initialCurrentWatchBookState,
} from "./CurrentWatchBookReducer";
import { CurrentWatchBookContext } from "./CurrentWatchBookContext";

type BookProviderProps = {
  children: React.ReactNode;
};

const CurrentWatchBookProvider = ({ children }: BookProviderProps) => {
  const [currentWatchBookState, currentWatchBookDispatch] = useReducer(
    currentWatchBookReducer,
    initialCurrentWatchBookState
  );
  return (
    <CurrentWatchBookContext.Provider
      value={{ currentWatchBookState, currentWatchBookDispatch }}
    >
      {children}
    </CurrentWatchBookContext.Provider>
  );
};

export default CurrentWatchBookProvider;
