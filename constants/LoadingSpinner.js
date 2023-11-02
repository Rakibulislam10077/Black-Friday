import { View, Text } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native-paper";

const LoadingSpinner = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <ActivityIndicator animating={true} size={"small"} color={"#0C1B32"} />
    </View>
  );
};

export default LoadingSpinner;
