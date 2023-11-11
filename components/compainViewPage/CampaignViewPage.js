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
import { useAllCoupon, useCampaign } from "../../hooks/AllHooks";
import LoadingSpinner from "../../constants/LoadingSpinner";

const CampaignViewPage = () => {
  const navigation = useNavigation();
  const { campaign } = useCampaign();
  const { allCoupon, couponDataLoading } = useAllCoupon("Deal");

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
        {couponDataLoading ? (
          <LoadingSpinner />
        ) : (
          <ScrollView>
            {allCoupon?.map((deal) => {
              return <Deals deal={deal} key={deal?._id} />;
            })}
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

export default CampaignViewPage;
