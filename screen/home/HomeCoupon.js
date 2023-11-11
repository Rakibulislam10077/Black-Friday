import {
  View,
  Text,
  Image,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import React from "react";
import { HomeStyle } from "./HomeStyle";
import CouponButton from "../../Shared/CouponButton";
import { getExpireInAtDays } from "../../utils/formattedDate";
import { useNavigation } from "@react-navigation/native";

const HomeCoupon = ({ coupon }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={HomeStyle.bestCouponCart}
      key={coupon?._id}
      onPress={() => navigation.navigate("ViewPage", { ...coupon })}
    >
      <View activeOpacity={0.3} style={HomeStyle.couponLogoAndTextCon}>
        <Image
          style={HomeStyle.couponLogo}
          source={{ uri: coupon?.store?.storePhotoURL }}
        />
        <Text>{coupon?.store?.storeName}</Text>
      </View>
      <View style={HomeStyle.postTitleBox}>
        <Text numberOfLines={2} style={HomeStyle.postTitle}>
          {coupon?.postTitle}
        </Text>
      </View>
      <Text style={HomeStyle.exDate}>
        End in{" "}
        <Text style={{ fontWeight: "700" }}>
          {getExpireInAtDays(coupon?.expireDate)}
        </Text>{" "}
        days
      </Text>
      <View style={HomeStyle.couponBTNCon}>
        <CouponButton coupon={coupon}>Get Code</CouponButton>
      </View>
    </TouchableOpacity>
  );
};

export default HomeCoupon;
