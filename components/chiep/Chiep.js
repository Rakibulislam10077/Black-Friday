import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
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

  const selectedCampaignId =
    selectedCampaignColor?._id || campaignDataFromHome?._id;

  return (
    <View style={ChiepStyle.chiepContainer}>
      <View style={ChiepStyle.chiepSubContainer}>
        <FlatList
          data={campaign}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingVertical: 10,
            paddingHorizontal: 20,
            gap: 10,
          }}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  handleCampaignEventListener(item);
                }}
                style={[
                  ChiepStyle.chiepItem,
                  {
                    backgroundColor:
                      selectedCampaignId === item?._id ? "#E7F0F2" : "#ffffff",
                  },
                ]}
              >
                <Image
                  style={ChiepStyle.chiepItemImage}
                  source={{
                    uri: item?.campaignPhotoURL,
                  }}
                />
                <Text style={ChiepStyle.chiepItemText}>
                  {item?.campaignName}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </View>
  );
};

export default Chiep;
