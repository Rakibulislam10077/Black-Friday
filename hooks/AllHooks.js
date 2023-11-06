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
    const getCountry = async () => {
      const userCountry = await AsyncStorage.getItem("selected_country");
      return userCountry;
      // console.log(userCountry);
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
    const getCountry = async () => {
      const userCountry = AsyncStorage.getItem("selected_country");
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
  useEffect(() => {
    fetch(`${APIurl}/category`)
      .then((res) => res.json())
      .then((data) => setCategoryData(data?.data));
  }, []);
  return {
    categoryData,
  };
};
// get campaign page
export const useCampaign = () => {
  const [campaign, setCampaign] = useState([]);
  useState(() => {
    fetch(`${APIurl}/campaign`)
      .then((res) => res.json())
      .then((data) => setCampaign(data?.data));
  }, []);
  return { campaign };
};

// get carousel
export const useCarousel = () => {
  const [carousels, setCarousels] = useState([]);
  useEffect(() => {
    fetch(`${APIurl}/carousel`)
      .then((res) => res.json())
      .then((data) => setCarousels(data?.data));
  }, []);
  return { carousels };
};
