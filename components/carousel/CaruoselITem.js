import {
  TouchableOpacity,
  Image,
  View,
  Text,
  FlatList,
  Dimensions,
} from "react-native";
import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CarouselItem = ({ item }) => {
  return (
    <TouchableOpacity
      onPress={async () => {
        console.log(await AsyncStorage.getItem("selected_country"));
      }}
      style={{
        paddingHorizontal: 20,
        width: 340,
        height: 200,
      }}
    >
      <Image
        resizeMode="stretch"
        style={{ width: "100%", borderRadius: 10, height: 160 }}
        source={{ uri: item?.photoURL }}
      />
    </TouchableOpacity>
  );
};

export default CarouselItem;
