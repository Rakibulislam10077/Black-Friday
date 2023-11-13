import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const APIurl = "https://black-friday-affiliate-server.vercel.app/api/v1";

// get All store
export const useAllStore = (type) => {
  const [allStore, setAllStore] = useState([]);
  const [storeError, setStoreError] = useState(null);
  const [storeDataIsLoading, setStoreDataIsLoading] = useState(true);
  const [storeRefresh, setStoreRefresh] = useState(0);
  useEffect(() => {
    // const getCountry = async () => {
    //   const userCountry = await AsyncStorage.getItem("selected_country");
    //   return userCountry;
    //   // console.log(userCountry);
    // };

    const getAllStore = async () => {
      fetch(`${APIurl}/store?${type}`)
        .then((res) => res.json())
        .then((data) => {
          setAllStore(data?.data);
          setStoreDataIsLoading(false);
        })
        .catch((error) => {
          setStoreError(error);
        });
    };
    getAllStore();
  }, [storeRefresh]);
  return { allStore, storeError, storeDataIsLoading, setStoreRefresh };
};

// get all coupon
export const useAllCoupon = (type) => {
  const [allCoupon, setAllCoupon] = useState([]);
  const [couponError, setCouponError] = useState(null);
  const [couponDataLoading, setCouponDataLoading] = useState(true);
  const [refreshCoupon, setRefreshCoupon] = useState(0);

  useEffect(() => {
    // const getCountry = async () => {
    //   const userCountry = AsyncStorage.getItem("selected_country");
    //   return userCountry;
    // };

    // &countries=${await getCountry()}

    const getAllCoupon = async () => {
      fetch(`${APIurl}/post?${type}`)
        .then((res) => res.json())
        .then((data) => {
          setAllCoupon(data?.data);
          setCouponDataLoading(false);
        })
        .catch((error) => {
          setCouponError(error);
        });
    };
    getAllCoupon();
  }, [refreshCoupon]);
  return {
    allCoupon,
    couponError,
    couponDataLoading,
    setRefreshCoupon,
  };
};

// QUERY COUPON
export const useQueryCoupon = (name, type) => {
  const [couponData, setCouponData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getStoreByCountry = async () => {
      const url = `${APIurl}/post/?storeName=${name}&postType=${type}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setCouponData(data?.data);
          setIsLoading(false);
        });
    };
    getStoreByCountry();
  }, []);
  return { couponData, isLoading };
};

// get all category
export const useAllCategory = () => {
  const [categoryData, setCategoryData] = useState([]);
  const [isLoadCategoryData, setIsLoadCategoryData] = useState(null);
  useEffect(() => {
    const getCountry = async () => {
      const userCountry = AsyncStorage.getItem("selected_country");
      return userCountry;
    };

    const getCategory = async () => {
      fetch(`${APIurl}/category?countries=${await getCountry()}`)
        .then((res) => res.json())
        .then((data) => setCategoryData(data?.data));
    };
    getCategory();
  }, []);
  return {
    categoryData,
  };
};
// get campaign page
export const useCampaign = () => {
  const [campaign, setCampaign] = useState([]);
  useState(() => {
    const getCampaign = async () => {
      fetch(`${APIurl}/campaign`)
        .then((res) => res.json())
        .then((data) => setCampaign(data?.data));
    };
    getCampaign();
  }, []);
  return { campaign };
};

// get carousel
export const useCarousel = () => {
  const [carousels, setCarousels] = useState([]);
  useEffect(() => {
    const getCountry = async () => {
      const userCountry = AsyncStorage.getItem("selected_country");
      return userCountry;
    };

    const getCarousel = async () => {
      fetch(`${APIurl}/carousel?countries=${await getCountry()}`)
        .then((res) => res.json())
        .then((data) => setCarousels(data?.data));
    };
    getCarousel();
  }, []);
  return { carousels };
};

// global search
export const useSearch = () => {
  const [isLoading, setIsLoading] = useState(true); // for Loader
  const [error, setError] = useState(null); // handle error
  const [searchedData, setSearchedData] = useState([]);
  const [searchKey, setSearchKey] = useState(" ");
  const [refetch, setRefetch] = useState(0);

  // const handleGlobalSearch = () => {
  useEffect(() => {
    const getCountry = async () => {
      const userCountry = await AsyncStorage.getItem("selected_country");
      return userCountry;
    };

    const getSearchApi = async () => {
      const url = `${APIurl}/post/search?countries=${await getCountry()}&searchTerm=${searchKey}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setSearchedData(data?.data);
          // setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
        });
    };
    getSearchApi();
    // };
  }, [searchKey, refetch]);

  return {
    searchedData,
    isLoading,
    setIsLoading,
    setSearchKey,
    error,
    setRefetch,
    // handleGlobalSearch,
  };
};