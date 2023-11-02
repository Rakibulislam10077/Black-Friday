import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import StoreDetails from "../../components/storeDetails/StoreDetails";
import { SafeAreaView } from "react-native-safe-area-context";
import { CouponStyle } from "./CouponStyle";
import { useNavigation } from "@react-navigation/native";
import { useAllCoupon } from "../../hooks/AllHooks";
import { BackArrow2, Magnify } from "../../constants/AllSvg";
import LoadingSpinner from "../../constants/LoadingSpinner";
import ErrorComponent from "../../constants/ErrorComponent";

const Coupon = () => {
  const navigation = useNavigation();
  const { allCoupon, couponDataLoading, couponError } = useAllCoupon();

  console.log(
    allCoupon.map((c) => c.store.storeName),
    "====================================6666666666666666666666666666666666666========================================="
  );
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* header box */}
      <View style={CouponStyle.headerContainer}>
        <View style={CouponStyle.backArrowAndTitle}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrow2 />
          </TouchableOpacity>
          <Text style={CouponStyle.title}>Offers</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Magnify />
        </TouchableOpacity>
      </View>
      {couponDataLoading ? (
        <LoadingSpinner />
      ) : couponError ? (
        <ErrorComponent />
      ) : (
        <View style={CouponStyle.itemBox}>
          <Text style={CouponStyle.allCouponText}>All Coupon code</Text>
          <ScrollView>
            {allCoupon?.map((couponData) => {
              return <StoreDetails couponData={couponData} />;
            })}
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Coupon;
