import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { VoucherStyle } from "./VoucherStyle";
import DealButton from "../dealButton/DealButton";

const Voucher = () => {
  return (
    <>
      <View style={VoucherStyle.voucherContainer}>
        <View style={VoucherStyle.voucherImgCon}>
          <Image source={require("../../assets/image/noon.png")} />
        </View>
        <View style={VoucherStyle.textContainer}>
          <Text style={VoucherStyle.discountText}>20% discount</Text>
          <Text style={VoucherStyle.exDate}>
            end in <Text>23</Text>days
          </Text>
        </View>
        <View style={VoucherStyle.buttonContainer}>
          <DealButton />
        </View>
      </View>
      <View style={VoucherStyle.voucherContainer}>
        <View style={VoucherStyle.voucherImgCon}>
          <Image source={require("../../assets/image/noon.png")} />
        </View>
        <View style={VoucherStyle.textContainer}>
          <Text style={VoucherStyle.discountText}>20% discount</Text>
          <Text style={VoucherStyle.exDate}>
            end in <Text>23</Text>days
          </Text>
        </View>
        <View style={VoucherStyle.buttonContainer}>
          <DealButton />
        </View>
      </View>
    </>
  );
};

export default Voucher;
