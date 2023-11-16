import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { ChiepStyle } from "./ChiepStyle";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

const Chiep = ({
  campaign,
  setSelectedCampaign,
  setRefreshCoupon,
  campaignDataFromHome,
}) => {
  const navigation = useNavigation();
  const [selectedCampaignColor, setSelectedCampaignColor] = useState(null);

  const handleCampaignEventListener = (cam) => {
    setSelectedCampaign(cam?.campaignName);
    setRefreshCoupon((prev) => prev + 1);
    setSelectedCampaignColor(cam);
  };

  console.log(campaign, "0000000000000000000");

  const selectedCampaignId =
    selectedCampaignColor?._id || campaignDataFromHome?._id;

  return (
    <View style={ChiepStyle.chiepContainer}>
      <View style={ChiepStyle.chiepSubContainer}>
        {campaign?.map((cam) => {
          return (
            <TouchableOpacity
              onPress={() => {
                handleCampaignEventListener(cam);
              }}
              style={[
                ChiepStyle.chiepItem,
                {
                  backgroundColor:
                    selectedCampaignId === cam?._id ? "#E7F0F2" : "#ffffff",
                },
              ]}
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
        })}
      </View>
    </View>
  );
};

export default Chiep;
