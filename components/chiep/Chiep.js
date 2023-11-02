import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ChiepStyle } from "./ChiepStyle";
import { ScrollView } from "react-native-gesture-handler";
import { Image } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";

const Chiep = ({ cam }) => {
  const navigation = useNavigation();

  return (
    <View style={ChiepStyle.chiepContainer}>
      <View style={ChiepStyle.chiepSubContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate("CampaignViewPage", { ...cam })}
          style={ChiepStyle.chiepItem}
        >
          <Image
            style={ChiepStyle.chiepItemImage}
            source={{ uri: cam?.campaignPhotoURL }}
          />
          <Text style={ChiepStyle.chiepItemText}>{cam?.campaignName}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Chiep;
