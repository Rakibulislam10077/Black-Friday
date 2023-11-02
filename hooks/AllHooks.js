import { useEffect, useState } from "react";

const APIurl = "https://black-friday-affiliate-server.vercel.app/api/v1";

// get All store
export const useAllStore = (type) => {
  const [allStore, setAllStore] = useState([]);
  const [storeError, setStoreError] = useState(null);
  const [storeDataIsLoading, setStoreDataIsLoading] = useState(true);
  useEffect(() => {
    const getAllStore = () => {
      fetch(`${APIurl}/store`)
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
  }, []);
  return { allStore, storeError, storeDataIsLoading };
};

// get all coupon
export const useAllCoupon = () => {
  const [allCoupon, setAllCoupon] = useState([]);
  const [couponError, setCouponError] = useState(null);
  const [couponDataLoading, setCouponDataLoading] = useState(true);

  useEffect(() => {
    const getAllCoupon = () => {
      fetch(`${APIurl}/post`)
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
  }, []);
  return {
    allCoupon,
    couponError,
    couponDataLoading,
  };
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
      .then((data) => setCarousels(data));
  }, []);
  return { carousels };
};