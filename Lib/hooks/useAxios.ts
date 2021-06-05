import { useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';

const useAxios = ({ url, method, body = null, headers = null }: any) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState('');
  const [loading, setloading] = useState(true);

  const fetchData = () => {
    // @ts-ignore
    axios[method](url, JSON.parse(headers), JSON.parse(body))
      .then((res: any) => {
        setResponse(res.data);
      })
      .catch((err: any) => {
        setError(err);
      })
      .finally(() => {
        setloading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [method, url, body, headers]);

  return { response, error, loading };
};

export default useAxios;
