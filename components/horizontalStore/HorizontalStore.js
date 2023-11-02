import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { HorizontalSStyle } from "./HorizontalSStyle";
import { useNavigation } from "@react-navigation/native";

const HorizontalStore = ({ store }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => {
        navigation.navigate("ViewPage", { ...store });
      }}
      style={HorizontalSStyle.storeContainer}
    >
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
    </TouchableOpacity>
  );
};

export default HorizontalStore;
