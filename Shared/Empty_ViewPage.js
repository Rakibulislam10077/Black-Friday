import { View, Text } from "react-native";
import React from "react";
import {
  Empty_Item_ViewPage,
  Empty_Item_ViewPage_logo,
} from "../constants/AllSvg";

const Empty_ViewPage = () => {
  return (
    <View style={{ justifyContent: "center", flex: 1, alignItems: "center" }}>
      <Empty_Item_ViewPage_logo />
      <Text
        style={{
          fontSize: 16,
          color: "rgba(0,0,0,0.5)",
          textAlign: "center",
        }}
      >
        There are currently no offers available
      </Text>
    </View>
  );
};

export default Empty_ViewPage;
