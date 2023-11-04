import { View, Text, Image } from "react-native";
import React from "react";

const EmptyData = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      <Image
        style={{ width: 200, height: 200 }}
        source={require("../assets/image/no-data-empty--removebg-preview.png")}
      />
      <Text style={{ fontSize: 20, color: "rgba(0,0,0,0.7)" }}>No Data</Text>
    </View>
  );
};

export default EmptyData;
