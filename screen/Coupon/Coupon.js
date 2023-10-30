import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import StoreDetails from "../../components/storeDetails/StoreDetails";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackArrow2, Magnify } from "../../constants/AllSvg";
import { CouponStyle } from "./CouponStyle";
import { useNavigation } from "@react-navigation/native";

const Coupon = () => {
  const navigation = useNavigation();
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
      <View style={CouponStyle.itemBox}>
        <Text style={CouponStyle.allCouponText}>All Coupon code</Text>
        <ScrollView>
          <StoreDetails />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Coupon;
