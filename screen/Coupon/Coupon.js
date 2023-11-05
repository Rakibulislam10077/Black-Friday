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
const Coupon = () => {
  const navigation = useNavigation();
  const { allCoupon, couponDataLoading, couponError, setRefreshCoupon } =
    useAllCoupon();
  const [callRefresh, setCallRefresh] = useState(false);
  const [netIsConnected, setNetIsConnected] = useState(null);
  const [isOnline, setIsOnline] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [refreshing, setRefreshing] = React.useState(false);

  const handelNetWorkFu = () => {
    setCallRefresh(true);
    setTimeout(() => {
      setRefreshCoupon((prev) => prev + 1);
      setRefreshing(false);
      setCallRefresh(false);
    }, 2000);
  };

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
        setErrorMessage("No network connection.");
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
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Magnify />
        </TouchableOpacity>
      </View>
      {!isOnline ? (
        <ErrorPage
          handelNetWorkFu={handelNetWorkFu}
          callRefresh={callRefresh}
          errorMessage={errorMessage}
        />
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
            >
              {allCoupon?.map((couponData) => {
                return <StoreDetails couponData={couponData} />;
              })}
            </ScrollView>
          )}
        </View>
      )}
    </SafeAreaView>
  );
};

export default Coupon;
