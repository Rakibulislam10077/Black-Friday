import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { ChiepStyle } from "../../components/chiep/ChiepStyle";
import { useNavigation } from "@react-navigation/native";

const HomeCampaign = ({ cam }) => {
  const navigation = useNavigation();

  const sendData = (cam) => {
    const camName = cam;
    navigation.navigate("CampaignViewPage", { ...camName });
  };

  return (
    <TouchableOpacity
      onPress={() => {
        // setSelectedCampaign(cam?.campaignName);
        sendData(cam);
      }}
      style={[ChiepStyle.chiepItem]}
    >
      <Image
        style={ChiepStyle.chiepItemImage}
        source={{
          uri: cam?.campaignPhotoURL,
        }}
      />
      <Text style={ChiepStyle.chiepItemText}>{cam?.campaignName}</Text>
    </TouchableOpacity>
  );
};

export default HomeCampaign;
