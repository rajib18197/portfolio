import { useEffect, useState } from "react";

export function useHttp(callback, id) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  console.log(id, callback);

  useEffect(
    function () {
      console.log(id);
      async function getData() {
        try {
          setIsLoading(true);
          setIsError(false);
          setError(null);

          const results = await callback(id);
          console.log(results);

          setData(results);
          setIsLoading(false);
        } catch (err) {
          setIsError(true);
          setError({ message: err.message });
        } finally {
          setIsLoading(false);
        }
      }

      getData();
    },
    [id]
  );

  return { data, isLoading, isError, error };
}
