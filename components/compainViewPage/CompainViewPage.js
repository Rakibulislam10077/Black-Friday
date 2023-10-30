import { View, Text, TouchableOpacity } from "react-native";
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

const CompainViewPage = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView>
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
        <Chiep />
      </View>
      {/* chiep item end */}
      {/* ======================== */}
      {/* category item */}
      <View style={CompainVStyle.categoryContainer}>
        <Category />
      </View>
      {/* category item end */}
      <View>
        <Deals />
      </View>
    </SafeAreaView>
  );
};

export default CompainViewPage;
