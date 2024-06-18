import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [success, setSuccess] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(url);
      setData(data);
      setSuccess(data.message);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return [data, isLoading, error, success];
}
