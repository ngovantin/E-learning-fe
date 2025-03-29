'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
const useFetch = (url, auth = false) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.auth.currentUser?.accessToken);

  const headers = auth && token ? {token: `Bearer ${token}`} : {};
  
  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await axios.get(url, {headers});
        setData(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, isLoading, error };
};
export default useFetch;
