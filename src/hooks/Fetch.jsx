import { useState, useEffect } from "react";

function useFetch(endpoint) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(endpoint)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch data from ${endpoint}`);
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [endpoint]);

  return { data, loading, error };
}

export default useFetch;
