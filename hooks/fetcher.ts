import { useEffect, useState } from "react";

export const useFetch = ({
  url,
  dataName,
  dummyData = {},
  interval = false,
}: {
  url: string;
  dataName: string;
  dummyData?: any;
  interval?: false | number;
}): UseFetch => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState(dummyData);

  useEffect(() => {
    if (localStorage.getItem(dataName)) {
      setData(JSON.parse(localStorage.getItem(dataName) || ""));
      setLoading(false);
    }

    const fetchData = async () => {
      try {
        const response: Response = await fetch(url);
        const responseData: any = await response.json();
        if (responseData?.statusCode === 400) {
          setError(true);
          return;
        }
        localStorage.setItem(dataName, JSON.stringify(responseData));
        setData(responseData);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
    if (interval !== false) setInterval(fetchData, interval);
  }, []);

  return [data, loading, error];
};
