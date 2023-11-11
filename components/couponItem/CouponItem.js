import { View, Text, ScrollView } from "react-native";
import React from "react";
import StoreDetails from "../storeDetails/StoreDetails";
import { useAllCoupon, useQueryCoupon } from "../../hooks/AllHooks";
import LoadingSpinner from "../../constants/LoadingSpinner";
import { Empty_Item_ViewPage_logo } from "../../constants/AllSvg";
import Empty_ViewPage from "../../Shared/Empty_ViewPage";

const CouponItem = ({ storeName, postType, store }) => {
  const { couponData, isLoading } = useQueryCoupon(storeName, postType);

  // console.log(".....................", store);

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      {isLoading ? (
        <LoadingSpinner />
      ) : couponData.length === 0 ? (
        <Empty_ViewPage />
      ) : (
        <ScrollView>
          <View style={{ paddingBottom: 100 }}>
            {couponData?.map((item) => (
              <StoreDetails item={item} store={store} key={item?._id} />
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default CouponItem;
