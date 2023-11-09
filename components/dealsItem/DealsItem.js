import React from "react";
import { DealsStyle } from "../deals/DealsStyle";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { getExpireInAtDays } from "../../utils/formattedDate";
import { Divider } from "react-native-paper";
import { DescIcon } from "../../constants/AllSvg";
import { useNavigation } from "@react-navigation/native";
import Deals from "../deals/Deals";
import { useQueryCoupon } from "../../hooks/AllHooks";
import LoadingSpinner from "../../constants/LoadingSpinner";
const DealsItem = ({ storeName, postType }) => {
  const { couponData, isLoading } = useQueryCoupon(storeName, postType);

  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ScrollView>
          <View style={{ paddingBottom: 100, paddingTop: 10 }}>
            {couponData?.map((dealItem) => (
              <Deals dealItem={dealItem} key={dealItem?._id} />
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default DealsItem;
