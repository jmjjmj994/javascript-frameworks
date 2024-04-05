import { useEffect, useState } from 'react';
type APIDataReviews = {
  id?: string;
  username?: string;
  rating?: number;
};
type APIDataTags = [string, string];
export type APIData = {
  id: string;
  title: string;
  description: string;
  discountedPrice: number;
  image: {
    url: string;
  };
  price: number;
  rating: number;
  reviews?: APIDataReviews[];
  tags: APIDataTags[];
};

function useFetch(id: string | unknown) {
  const [data, setData] = useState<APIData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>('');
  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await fetch(
          `${
            id
              ? `https://v2.api.noroff.dev/online-shop/${id}`
              : 'https://v2.api.noroff.dev/online-shop/'
          }`
        );

        if (!response.ok) {
          throw new Error('Error fetching data');
        }
        const products = await response.json();
        setData(products.data);
        setLoading(false);
      } catch (e) {
        if (e instanceof Error) {
          console.error(e.message);
          setError(e.message);
        }
      }
    }
    fetchData();
  }, [id]);

  return {
    data,
    loading,
    error,
  };
}

export default useFetch;
