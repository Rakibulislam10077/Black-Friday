import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { VoucherStyle } from "./VoucherStyle";
import DealButton from "../../Shared/dealButton/DealButton";
import { useNavigation } from "@react-navigation/native";
import { getExpireInAtDays } from "../../utils/formattedDate";
import { useQueryCoupon } from "../../hooks/AllHooks";
import { DealbuttonStyle } from "../../Shared/dealButton/DealButtonStyle";

const Voucher = ({ storeName, postType }) => {
  const navigation = useNavigation();
  const { couponData } = useQueryCoupon(storeName, postType);
  return (
    <ScrollView>
      <View style={{ paddingBottom: 100 }}>
        {couponData?.map((voucher) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("CouponAndDealCart", { ...voucher })
              }
              style={VoucherStyle.voucherContainer}
            >
              <View style={VoucherStyle.voucherImgCon}>
                <Image
                  style={VoucherStyle.voucherImg}
                  source={{ uri: voucher?.store?.storePhotoURL }}
                />
              </View>
              <View style={VoucherStyle.textContainer}>
                <Text style={VoucherStyle.discountText}>
                  {voucher?.postTitle}
                </Text>
                <Text style={VoucherStyle.exDate}>
                  end in{" "}
                  <Text style={{ fontWeight: "700" }}>
                    {getExpireInAtDays(voucher?.expireDate)}{" "}
                  </Text>
                  days
                </Text>
              </View>
              <View style={VoucherStyle.buttonContainer}>
                <View style={DealbuttonStyle.button}>
                  <Text style={DealbuttonStyle.buttonText}>Buy It</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Voucher;
