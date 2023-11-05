import { Text, TouchableOpacity, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { StoreDetailsStyle } from "./StoreDetailsStyle";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { DescIcon, VerifiedIcon } from "../../constants/AllSvg";
import { getExpireInAtDays } from "../../utils/formattedDate";
import CouponButton from "../../Shared/CouponButton";
import DealButton from "../../Shared/dealButton/DealButton";

const StoreDetails = ({ couponData, store, item }) => {
  const navigation = useNavigation();

  console.log(item, ".......................");

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate("ViewPage", { ...store, ...couponData, ...item })
      }
      style={StoreDetailsStyle.storeDetailsCard}
    >
      <View style={[StoreDetailsStyle.couponBtnImgTextCon]}>
        <View style={{ flexDirection: "row", alignItems: "center", flex: 2.7 }}>
          <TouchableOpacity style={StoreDetailsStyle.imgCon}>
            <Image
              style={StoreDetailsStyle.cartImg}
              resizeMode="contain"
              source={{
                uri:
                  couponData?.store?.storePhotoURL ||
                  store?.store?.storePhotoURL ||
                  item?.store?.storePhotoURL,
              }}
            />
          </TouchableOpacity>
          <View style={StoreDetailsStyle.postTitleAndDateCon}>
            <Text numberOfLines={2} style={StoreDetailsStyle.postTitle}>
              {couponData?.postTitle || store?.postTitle || item?.postTitle}
            </Text>
            <Text style={StoreDetailsStyle.exDate}>
              End in{" "}
              <Text style={{ fontWeight: "600" }}>
                {getExpireInAtDays(
                  couponData?.expireDate ||
                    store?.expireDate ||
                    item?.expireDate
                )}
              </Text>{" "}
              days
            </Text>
          </View>
        </View>
        <View style={{ flex: 1.3 }} activeOpacity={0.7}>
          {/* button components */}
          {(couponData?.postType || store?.postType || item?.postType) !==
          "Coupon" ? (
            <DealButton couponData={couponData} store={store} item={item} />
          ) : (
            <CouponButton couponData={couponData} item={item} store={store}>
              Show Code
            </CouponButton>
          )}
          {/* )} */}
        </View>
      </View>
      {/* logical divider for store cart item */}
      {(couponData?.postDescription ||
        couponData?.isVerified ||
        store?.isVerified ||
        store?.storeDescription) && (
        <Divider style={StoreDetailsStyle.divider} />
      )}
      {/* this is verification section */}
      {(couponData?.isVerified === true || store?.isVerified === true) && (
        <View style={StoreDetailsStyle.verifiedCon}>
          <View style={StoreDetailsStyle.verifyIcon}>
            <VerifiedIcon />
          </View>
          <Text style={StoreDetailsStyle.verifyText}>Verified offer</Text>
        </View>
      )}

      {/* this is description section optional */}

      {(store?.postDescription || couponData?.postDescription) && (
        <View style={[StoreDetailsStyle.verifiedCon, { marginTop: 15 }]}>
          <View style={StoreDetailsStyle.verifyIcon}>
            <DescIcon />
          </View>

          <View style={{ flex: 3 }}>
            <Text style={StoreDetailsStyle.desc}>
              {couponData?.postDescription ||
                store?.postDescription ||
                item?.postDescription}
            </Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default StoreDetails;
