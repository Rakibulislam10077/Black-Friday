import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackArrow2, Magnify } from "../../constants/AllSvg";
import { AllVoucherStyle } from "./AllVoucherStyle";
import { useNavigation } from "@react-navigation/native";
import Voucher from "../voucher/Voucher";
import { useAllCoupon } from "../../hooks/AllHooks";

const AllVoucher = () => {
  const navigation = useNavigation();
  const { allCoupon: voucherData } = useAllCoupon("postType=Voucher");

  console.log(voucherData);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={AllVoucherStyle.headerContainer}>
        <View style={AllVoucherStyle.backArrowAndTitle}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrow2 />
          </TouchableOpacity>
          <Text style={AllVoucherStyle.title}>All voucher</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Magnify />
        </TouchableOpacity>
      </View>
      <View style={AllVoucherStyle.itemContainer}>
        <ScrollView>
          <View>
            {voucherData?.map((voucher) => {
              return <Voucher voucher={voucher} key={voucher?._id} />;
            })}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default AllVoucher;
