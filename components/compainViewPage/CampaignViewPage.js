import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  BackArrow,
  BackArrow2,
  Magnify,
  NotificationBell,
} from "../../constants/AllSvg";
import { CompainVStyle } from "./CompainVStyle";
import { useNavigation } from "@react-navigation/native";
import Chiep from "../chiep/Chiep";
import Category from "../categry/Category";
import Deals from "../deals/Deals";
import { useCampaign } from "../../hooks/AllHooks";

const CampaignViewPage = (props) => {
  const cam = props?.route?.params;
  const navigation = useNavigation();
  const { campaign } = useCampaign();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* header */}
      <View style={CompainVStyle.header}>
        <View style={CompainVStyle.backArrowAndTitleCon}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrow2 />
          </TouchableOpacity>
          <Text style={CompainVStyle.title}>Black Friday</Text>
        </View>
        <View style={CompainVStyle.BellAndMagnifyCon}>
          <Magnify />
          <TouchableOpacity
            onPress={() => navigation.navigate("Notification")}
            style={CompainVStyle.bellCon}
          >
            <NotificationBell />
          </TouchableOpacity>
        </View>
      </View>
      {/* header end */}
      {/* ======================== */}
      {/* chiep item */}
      <View style={CompainVStyle.chiepContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {campaign?.map((cam) => {
            return <Chiep cam={cam} />;
          })}
        </ScrollView>
      </View>
      {/* chiep item end */}
      {/* ======================== */}
      {/* category item */}
      <View style={CompainVStyle.categoryContainer}>
        <Category />
      </View>
      {/* category item end */}
      <View style={{ flex: 1 }}>
        <View>
          <ScrollView>
            <Deals />
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CampaignViewPage;
