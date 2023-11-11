import {
  View,
  Text,
  Image,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import React from "react";
import { VoucherStyle } from "../../components/voucher/VoucherStyle";
import { getExpireInAtDays } from "../../utils/formattedDate";
import { DealbuttonStyle } from "../../Shared/dealButton/DealButtonStyle";
import { useNavigation } from "@react-navigation/native";

const HomeVoucher = ({ voucher }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("CouponAndDealCart", { ...voucher })}
      key={voucher?._id}
      style={VoucherStyle.voucherContainer}
    >
      <View style={VoucherStyle.voucherImgCon}>
        <Image
          style={VoucherStyle.voucherImg}
          source={{ uri: voucher?.store?.storePhotoURL }}
        />
      </View>
      <View style={VoucherStyle.textContainer}>
        <Text style={VoucherStyle.discountText}>{voucher?.postTitle}</Text>
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
};

export default HomeVoucher;
