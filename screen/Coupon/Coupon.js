import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  RefreshControl,
} from "react-native";
import React, { useState, useEffect } from "react";
import StoreDetails from "../../components/storeDetails/StoreDetails";
import { SafeAreaView } from "react-native-safe-area-context";
import { CouponStyle } from "./CouponStyle";
import { useNavigation } from "@react-navigation/native";
import { useAllCoupon } from "../../hooks/AllHooks";
import { BackArrow2, Magnify } from "../../constants/AllSvg";
import LoadingSpinner from "../../constants/LoadingSpinner";
import ErrorComponent from "../../constants/ErrorComponent";
import ErrorPage from "../../Shared/ErrorPage";
import NetInfo from "@react-native-community/netinfo";

export let refreshDataFromCouponPage;

const Coupon = () => {
  const navigation = useNavigation();
  const { allCoupon, couponDataLoading, couponError, setRefreshCoupon } =
    useAllCoupon();
  const [isOnline, setIsOnline] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [refreshing, setRefreshing] = React.useState(false);

  refreshDataFromCouponPage = setRefreshCoupon;

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshCoupon((prev) => prev + 1);
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsOnline(state.isConnected);
      if (!state.isConnected) {
        setErrorMessage("No internet connection.");
      } else {
        setErrorMessage("");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

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
        {isOnline && (
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <Magnify />
          </TouchableOpacity>
        )}
      </View>
      {!isOnline ? (
        <ErrorPage />
      ) : (
        <View style={CouponStyle.itemBox}>
          <Text style={CouponStyle.allCouponText}>All Coupon code</Text>
          {couponDataLoading ? (
            <LoadingSpinner />
          ) : allCoupon?.length === 0 ? (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
              }}
            >
              <Image
                style={{ width: 200, height: 200 }}
                source={require("../../assets/image/no-data-empty--removebg-preview.png")}
              />
              <Text style={{ fontSize: 20, color: "rgba(0,0,0,0.7)" }}>
                No Data
              </Text>
            </View>
          ) : (
            <ScrollView
              refreshControl={
                <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
              }
              contentContainerStyle={{
                paddingBottom: 50,
              }}
            >
              {allCoupon?.map((couponData) => {
                return (
                  <StoreDetails couponData={couponData} key={couponData?._id} />
                );
              })}
            </ScrollView>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default Coupon;
