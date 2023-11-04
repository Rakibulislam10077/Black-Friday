import {
  TouchableOpacity,
  Image,
  View,
  Text,
  FlatList,
  Dimensions,
} from "react-native";
import React from "react";

const CarouselItem = ({ item }) => {
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 20,
        width: 340,
        height: 200,
      }}
    >
      {item?.map((c) => {
        return (
          <Image
            resizeMode="contain"
            style={{ width: "100%", borderRadius: 10, height: 160 }}
            source={{ uri: c?.photoURL }}
          />
        );
      })}
    </TouchableOpacity>
  );
};

export default CarouselItem;
