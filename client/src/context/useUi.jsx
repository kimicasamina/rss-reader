import React, { createContext, useContext, useState } from "react";

const UiContext = createContext();
export function UiContextProvider({ children }) {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <UiContext.Provider
      value={{
        showLogin,
        setShowLogin,
      }}
    >
      {children}
    </UiContext.Provider>
  );
}

export const useUi = () => useContext(UiContext);
