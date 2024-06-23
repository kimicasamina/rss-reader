import React, { useState, useEffect } from "react";
import axios from "axios";

export default function useFetchRss(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    try {
      setIsLoading(true);
      const { data } = await axios.get(
        `https://api.rss2json.com/v1/api.json?rss_url=${url}`
      );
      setData(data);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  return [data, isLoading, error];
}
