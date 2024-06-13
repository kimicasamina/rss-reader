import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
const AuthContext = createContext();

export function ProvideAuth({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log("user:", user);

  const logoutUser = () => {
    setUser(null);
    return <Navigate to="/login" />;
  };

  const loginUser = async (data) => {
    setUser(data);
    return <Navigate to="/" />;
  };

  useEffect(() => {
    async function fetchData() {
      if (!user) {
        try {
          const { data } = await axios.get("/user/getuser").then(({ data }) => {
            console.log("user data:", data);
            setUser(data.user);
          });
          // setIsFetching(false);
        } catch (err) {
          console.log(err);
          setError(err);
        } finally {
          setIsLoading(false);
        }
      }
    }

    fetchData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        setIsLoading,
        error,
        setError,
        loginUser,
        logoutUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(AuthContext);
};
