import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

const APIurl = "https://black-friday-affiliate-server.vercel.app/api/v1";

// get All store
export const useAllStore = (type) => {
  const [allStore, setAllStore] = useState([]);
  const [storeError, setStoreError] = useState(null);
  const [storeDataIsLoading, setStoreDataIsLoading] = useState(true);
  const [storeRefetch, setStoreRefetch] = useState(0);
  const [storeRefetchTow, setStoreRefetchTow] = useState(0);
  useEffect(() => {
    const getCountry = async () => {
      const userCountry = await AsyncStorage.getItem("selected_country");
      return userCountry;
    };

    const getAllStore = async () => {
      fetch(`${APIurl}/store?${type}&countries=${await getCountry()}`)
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
  }, [storeRefetch, storeRefetchTow]);
  return {
    allStore,
    storeError,
    storeDataIsLoading,
    setStoreRefetch,
    setStoreRefetchTow,
  };
};

// get all coupon
export const useAllCoupon = (type) => {
  const [allCoupon, setAllCoupon] = useState([]);
  const [couponError, setCouponError] = useState(null);
  const [couponDataLoading, setCouponDataLoading] = useState(true);
  const [refreshCoupon, setRefreshCoupon] = useState(0);
  const [
    refetchCouponForCountryRedeclare,
    setRefetchCouponForCountryRedeclare,
  ] = useState(0);

  useEffect(() => {
    const getCountry = async () => {
      const userCountry = await AsyncStorage.getItem("selected_country");
      return userCountry;
    };
    const getAllCoupon = async () => {
      fetch(`${APIurl}/post?${type}&countries=${await getCountry()}`)
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
  }, [refreshCoupon || refetchCouponForCountryRedeclare]);
  return {
    allCoupon,
    couponError,
    couponDataLoading,
    setRefreshCoupon,
    setRefetchCouponForCountryRedeclare,
  };
};

// QUERY COUPON
export const useQueryCoupon = (name, type) => {
  const [couponData, setCouponData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getDataByStore = async () => {
      const url = `${APIurl}/post/?storeName=${name}&postType=${type}`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setCouponData(data?.data);
          setIsLoading(false);
        });
    };
    getDataByStore();
  }, []);
  return { couponData, isLoading };
};

// get all category
export const useAllCategory = () => {
  const [categoryData, setCategoryData] = useState([]);
  useEffect(() => {
    const getCountry = async () => {
      const userCountry = await AsyncStorage.getItem("selected_country");
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
  const [refetchCarousel, setRefetchCarousel] = useState(0);
  useEffect(() => {
    const getCountry = async () => {
      const userCountry = await AsyncStorage.getItem("selected_country");
      return userCountry;
    };
    const getCarousel = async () => {
      fetch(`${APIurl}/carousel/${await getCountry()}`)
        .then((res) => res.json())
        .then((data) => setCarousels(data?.data));
    };
    getCarousel();
  }, [refetchCarousel]);
  return { carousels, setRefetchCarousel };
};

// global search
export const useSearch = () => {
  const [isLoading, setIsLoading] = useState(true); // for Loader
  const [error, setError] = useState(null); // handle error
  const [searchedData, setSearchedData] = useState([]);
  const [searchKey, setSearchKey] = useState(" ");
  const [refetch, setRefetch] = useState(0);
  useEffect(() => {
    const getCountry = async () => {
      const userCountry = await AsyncStorage.getItem("selected_country");
      return userCountry;
    };

    const getSearchApi = async () => {
      fetch(
        `${APIurl}/post/search?countries=${await getCountry()}&searchTerm=${searchKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchedData(data?.data);
          setIsLoading(false);
        })
        .catch((error) => {
          setError(error);
        });
    };
    getSearchApi();
  }, [searchKey, refetch]);
  return {
    searchedData,
    isLoading,
    setIsLoading,
    setSearchKey,
    error,
    setRefetch,
  };
};

export const useGetStoreById = () => {
  const getStoreById = async (id) => {
    const res = await fetch(`${APIurl}/store/${id}`);
    const data = await res.json();

    return data;
  };
  return { getStoreById };
};
export const useGetStoreByStoreName = () => {
  const getStoreByStoreName = async (storeName) => {
    const res = await fetch(`${APIurl}/store/name/${storeName}`);
    const data = await res.json();

    return data;
  };
  return { getStoreByStoreName };
};