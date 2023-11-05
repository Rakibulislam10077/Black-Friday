import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { ActivityIndicator } from "react-native-paper";

const ErrorPage = ({ callRefresh, handelNetWorkFu, errorMessage }) => {
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
      <TouchableOpacity
        style={{
          width: 200,
          height: 40,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0C1B32",
        }}
        onPress={() => handelNetWorkFu()}
        activeOpacity={0.7}
      >
        {callRefresh === true ? (
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
              width: "100%",
              paddingHorizontal: 20,
            }}
          >
            <ActivityIndicator color="#fff" />
            <Text style={{ color: "#fff", marginLeft: 20 }}>Loading...</Text>
          </View>
        ) : (
          <Text style={{ color: "#fff" }}>Reload</Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default ErrorPage;
