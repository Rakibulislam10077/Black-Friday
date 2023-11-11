import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import { Divider } from "react-native-paper";
import { HomeStyle } from "./HomeStyle";
import { useNavigation } from "@react-navigation/native";
const HomeStore = ({ store }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      key={store?._id}
      onPress={() => navigation.navigate("ViewPage", { ...store })}
      style={HomeStyle.topStoreItem}
    >
      <View style={HomeStyle.storeImgCon}>
        <Image
          style={HomeStyle.topStoreImg}
          source={{ uri: store?.storePhotoURL }}
        />
      </View>
      <Text numberOfLines={2} style={HomeStyle.storeName}>
        {store?.storeName}
      </Text>
      <Divider style={HomeStyle.storeDivider} />
      <Text style={HomeStyle.storeOfferText}>
        <Text>{store?.totalPosts}</Text> offers
      </Text>
    </TouchableOpacity>
  );
};

export default HomeStore;
