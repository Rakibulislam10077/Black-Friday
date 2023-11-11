import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

const ErrorPage = ({ errorMessage }) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#fff",
      }}
    >
      {
        <View style={{ alignItems: "center", marginBottom: 20 }}>
          <Image
            style={{ width: 120, height: 120 }}
            resizeMode="contain"
            source={require("../assets/image/offline-removebg-preview.png")}
          />
          <Text style={{ fontSize: 12, color: "#0C1B32" }}>{errorMessage}</Text>
        </View>
      }
    </View>
  );
};

export default ErrorPage;
