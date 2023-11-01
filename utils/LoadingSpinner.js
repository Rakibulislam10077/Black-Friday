import { View, Text } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native-paper";

const LoadingSpinner = () => {
  return (
    <View>
      <ActivityIndicator animating={true} color={"#0C1B32"} />
    </View>
  );
};

export default LoadingSpinner;
