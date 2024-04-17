import { useState, useEffect } from 'react';

//Peticion Get con Refetch asincrono
export const useFetchGet = (endpoint) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [code, setCode] = useState(null);
  const [error, setError] = useState(null);
  const [refetch, setRefetch] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('user-token');
        const headers = {
          "Authorization": 'Bearer '+ token,
          "Content-Type": "application/json"
        };

        const response = await fetch(process.env.REACT_APP_API_URL + endpoint, {
          method: 'GET',
          headers: headers
        });

        let jsonData = await response.json();

        setCode(response.status)
        if (response.status !== 200){
          setError(jsonData.error)
        }
        else{
          setData(jsonData)
        }
        setIsLoading(false);

        setData(jsonData);
        setIsLoading(false);

      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
      finally{
        setRefetch(false)
      }
    };

    if(refetch && endpoint.length > 0){
      fetchData();
    }
    
  }, [endpoint, refetch]);

  return { isLoading, data, code, error, setRefetch };
};


//Peticion Put Asincrona
export const useFetchPut = (endpoint) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  const [code, setCode] = useState(null);
  const [error, setError] = useState(null);
  const [refetch, setRefetch] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('user-token');
        const headers = {
          "Authorization": 'Bearer '+ token,
          "Content-Type": "application/json"
        };

        const response = await fetch(process.env.REACT_APP_API_URL + endpoint, {
          method: 'PUT',
          headers: headers
        });

        let jsonData = await response.json();

        setCode(response.status)
        if (response.status !== 200){
          setError(jsonData.error)
        }
        else{
          setData(jsonData)
        }
        setIsLoading(false);

        setData(jsonData);
        setIsLoading(false);

      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
      finally{
        setRefetch(false)
      }
    };

    if(refetch && endpoint.length > 0){
      fetchData();
    }
    
  }, [endpoint, refetch]);

  return { isLoading, data, code, error, setRefetch };
};
