import React, { useState, useContext, createContext, useEffect } from "react";
import axios from "axios";

const authContext = createContext();

export function ProvideAuth({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      if (!user) {
        try {
          const { data } = await axios.get("/user/getuser").then(({ data }) => {
            console.log("user data:", data);
            setUser(data.profile);
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
    <authContext.Provider
      value={{ user, setUser, isLoading, setIsLoading, error }}
    >
      {children}
    </authContext.Provider>
  );
}

export const useAuth = () => {
  return useContext(authContext);
};
