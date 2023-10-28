"use client";
import React, {
  useState,
  useContext,
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from "react";

interface AppContextInterface {
  expanded: boolean;
  setExpanded: Dispatch<SetStateAction<boolean>>;
}

export const cartContextDefaultValue: AppContextInterface = {
  expanded: true,
  setExpanded: () => true,
};

const AppContext = createContext<AppContextInterface>(cartContextDefaultValue);

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [expanded, setExpanded] = useState<boolean>(true);
  const value = { expanded, setExpanded };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
