import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AllStoreStyle } from "./AllStoreStyle";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const AllStore = ({ store }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ViewPage", { ...store })}
      activeOpacity={0.8}
      style={AllStoreStyle.storeContainer}
    >
      <View style={AllStoreStyle.imgContainer}>
        <Image
          style={AllStoreStyle.img}
          source={{ uri: store?.storePhotoURL }}
        />
      </View>
      <Text numberOfLines={2} style={AllStoreStyle.storeName}>
        {store?.storeName}
      </Text>
      <Divider style={AllStoreStyle.divider} />
      <Text style={AllStoreStyle.offerText}>
        <Text style={AllStoreStyle.offerNumber}>{store?.totalPosts}</Text> offer
        available
      </Text>
    </TouchableOpacity>
  );
};

export default AllStore;
