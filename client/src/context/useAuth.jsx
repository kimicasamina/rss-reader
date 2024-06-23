import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { deleteSub, setSubs } from "../redux/reducers/subscription";
const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState(null);
  const dispatch = useDispatch();

  console.log("user:", user);

  const logoutUser = async () => {
    try {
      const { data } = await axios.delete("/api/user/logout");
      console.log(data);
      setUser(null);
      dispatch(setSubs(null));
      // dispatch(deleteSubs());
      toast.success(data.message);
    } catch (err) {
      console.log(err);
      toast.error(err.response.data.message);
    }
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
          const { data } = await axios
            .get("/api/user/getuser")
            .then(({ data }) => {
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
