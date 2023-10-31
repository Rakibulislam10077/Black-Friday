import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { DealbuttonStyle } from "./DealButtonStyle";
import { useNavigation } from "@react-navigation/native";

const DealButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("CouponAndDealCart")}
      style={DealbuttonStyle.button}
    >
      <Text style={DealbuttonStyle.buttonText}>Buy It</Text>
    </TouchableOpacity>
  );
};

export default DealButton;
