import { View, Text } from "react-native";
import React from "react";

const ErrorComponent = () => {
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
      <View
        style={{
          backgroundColor: "#EFDCD7",
          borderRadius: 8,
          borderWidth: 1,
          borderColor: "red",
          width: 200,
          height: 45,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 14,
            color: "red",
            opacity: 0.8,
          }}
        >
          Please Check you internet And reload data
        </Text>
      </View>
    </View>
  );
};

export default ErrorComponent;
