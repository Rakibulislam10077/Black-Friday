import { View, Text, ScrollView } from "react-native";
import React from "react";
import StoreDetails from "../storeDetails/StoreDetails";
import { useAllCoupon, useQueryCoupon } from "../../hooks/AllHooks";

const CouponItem = ({ storeName, postType }) => {
  const { couponData } = useQueryCoupon(storeName, postType);
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ paddingBottom: 100 }}>
          {couponData?.map((item) => (
            <StoreDetails item={item} key={item?._id} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default CouponItem;
