import { useEffect, useState } from "react";

const APIurl = "https://black-friday-affiliate-server.vercel.app/api/v1";

// get All store
export const useAllStore = () => {
  const [allStore, setAllStore] = useState([]);
  const [storeError, setStoreError] = useState(null);
  const [storeDataIsLoading, setStoreDataIsLoading] = useState(true);
  useEffect(() => {
    fetch(`${APIurl}/store`)
      .then((res) => res.json())
      .then((data) => {
        setAllStore(data?.data);
      })
      .catch((error) => {
        setStoreError(error);
      })
      .finally(setStoreDataIsLoading(false));
  }, []);
  return { allStore, storeError, storeDataIsLoading };
};
