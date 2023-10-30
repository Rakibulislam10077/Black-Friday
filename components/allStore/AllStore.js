import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { AllStoreStyle } from "./AllStoreStyle";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

const AllStore = () => {
  const navigation = useNavigation();
  return (
    <>
      <TouchableOpacity
        onPress={() => navigation.navigate("ViewPage")}
        activeOpacity={0.3}
        style={AllStoreStyle.storeContainer}
      >
        <View style={AllStoreStyle.imgContainer}>
          <Image
            style={AllStoreStyle.img}
            source={require("../../assets/image/noon.png")}
          />
        </View>
        <Text style={AllStoreStyle.storeName}>Noon</Text>
        <Divider style={AllStoreStyle.divider} />
        <Text style={AllStoreStyle.offerText}>1 offer available</Text>
      </TouchableOpacity>
      <View style={AllStoreStyle.storeContainer}>
        <View style={AllStoreStyle.imgContainer}>
          <Image
            style={AllStoreStyle.img}
            source={require("../../assets/image/noon.png")}
          />
        </View>
        <Text style={AllStoreStyle.storeName}>Noon</Text>
        <Divider style={AllStoreStyle.divider} />
        <Text style={AllStoreStyle.offerText}>1 offer available</Text>
      </View>
    </>
  );
};

export default AllStore;
