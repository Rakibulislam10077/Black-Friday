import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";

const CouponButton = ({ couponData, children, coupon, store }) => {
  const navigation = useNavigation();
  const [clickedButton, setClickedButton] = useState(false);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.buttonContainer}
      onPress={() => {
        navigation.navigate("CouponAndDealCart", {
          ...couponData,
          ...coupon,
          ...store,
        });
      }}
    >
      {!clickedButton ? (
        <View style={[styles.topLayer]}>
          <Text style={styles.topLayerText}>{children}</Text>
        </View>
      ) : (
        <View style={styles.hiddenLayer}>
          <Text style={styles.hiddenText}>{children}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default CouponButton;

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    height: 38,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 5,
  },
  topLayer: {
    alignItems: "center",
    width: "100%",
    backgroundColor: "#0C1B32",
    height: "100%",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  topLayerText: {
    color: "#fff",
    fontSize: 12,
  },
});
