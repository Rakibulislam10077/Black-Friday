import { View, Text, ScrollView } from "react-native";
import React from "react";
import StoreDetails from "../storeDetails/StoreDetails";

const CouponItem = ({ store }) => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ paddingBottom: 100 }}>
          <StoreDetails store={store} />
        </View>
      </ScrollView>
    </View>
  );
};

export default CouponItem;
