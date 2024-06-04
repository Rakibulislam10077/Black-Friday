import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import Voucher from "../voucher/Voucher";
import { useQueryCoupon } from "../../hooks/AllHooks";
import LoadingSpinner from "../../constants/LoadingSpinner";
import Empty_ViewPage from "../../Shared/Empty_ViewPage";

const VoucherItem = ({ storeName, postType }) => {
  const { couponData, isLoading } = useQueryCoupon(storeName, postType);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      {isLoading ? (
        <LoadingSpinner />
      ) : couponData?.length === 0 ? (
        <Empty_ViewPage />
      ) : (
        <View style={{ flex: 1 }}>
          {couponData?.map((voucher) => {
            return <Voucher voucher={voucher} key={voucher?._id} />;
          })}
        </View>
      )}
    </SafeAreaView>
  );
};

export default VoucherItem;
