import React, { createContext, useContext, useEffect, useState } from "react";

export const UiContext = createContext();
export function UiContextProvider({ children }) {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [loginAction, setLoginAction] = useState("login");
  const [isModalVisible, setIsModalVisible] = useState(false);

  console.log("action:", loginAction);

  const toggleLogin = (e) => {
    setShowLogin(!showLogin);
  };

  const toggleSignup = (e) => {
    setShowSignup(!showSignup);
  };

  // useEffect()

  return (
    <UiContext.Provider
      value={{
        showLogin,
        showSignup,
        toggleLogin,
        toggleSignup,
        loginAction,
        setLoginAction,
        isModalVisible,
        setIsModalVisible,
      }}
    >
      {children}
    </UiContext.Provider>
  );
}

export const useUi = () => useContext(UiContext);
