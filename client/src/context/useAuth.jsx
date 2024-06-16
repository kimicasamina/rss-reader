import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);

  console.log("user:", user);

  const logoutUser = async () => {
    try {
      const { data } = await axios.delete("/user/logout");
      console.log(data);
      alert(data.message);
    } catch (err) {
      console.log(err);
      alert(err.response.data.message);
    }
    setUser(null);
    return <Navigate to="/login" />;
  };

  const loginUser = async (data) => {
    setUser(data);
    setIsLoading(false);
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
          setErrors(err);
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
        errors,
        setErrors,
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
