import { View, Text, Image } from "react-native";
import React from "react";
import { HorizontalSStyle } from "./HorizontalSStyle";

const HorizontalStore = ({ store }) => {
  return (
    <View style={HorizontalSStyle.storeContainer}>
      <View style={HorizontalSStyle.storeSubContainer}>
        <View style={HorizontalSStyle.imgContainer}>
          <Image
            style={{ height: "100%", width: "100%" }}
            resizeMode="contain"
            source={{ uri: store?.storePhotoURL }}
          />
        </View>
        <Text numberOfLines={2} style={HorizontalSStyle.storeName}>
          {store?.storeName}
        </Text>
      </View>
    </View>
  );
};

export default HorizontalStore;
