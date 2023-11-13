import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
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
import {
  useAllCategory,
  useAllCoupon,
  useCampaign,
} from "../../hooks/AllHooks";
import LoadingSpinner from "../../constants/LoadingSpinner";

const CampaignViewPage = (props) => {
  const campaignDataFromHome = props?.route?.params;
  const navigation = useNavigation();
  const { campaign } = useCampaign();
  const [selectedCampaign, setSelectedCampaign] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { allCoupon, couponDataLoading, setRefreshCoupon } = useAllCoupon(
    `${selectedCampaign && `&campaignName=${selectedCampaign}`}&${
      selectedCategory && `categoryName=${selectedCategory}`
    }`
  );
  const { categoryData } = useAllCategory();
  // const checkCampaignData = () => {
  //   campaign?.map((dealData) => {
  //     console.log("this is campaign===============", dealData);
  //     // if (
  //     //   dealData?.campaign?.campaignName === campaignDataFromHome?.campaignName
  //     // );
  //   });
  // };
  // checkCampaignData();

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
            return (
              <Chiep
                setSelectedCampaign={setSelectedCampaign}
                campaignDataFromHome={campaignDataFromHome}
                setRefreshCoupon={setRefreshCoupon}
                cam={cam}
                key={cam?._id}
              />
            );
          })}
        </ScrollView>
      </View>
      {/* chiep item end */}
      {/* ======================== */}
      {/* category item */}
      <View style={CompainVStyle.categoryContainer}>
        <ScrollView horizontal={true}>
          <Category
            setSelectedCategory={setSelectedCategory}
            setRefreshCoupon={setRefreshCoupon}
            categoryData={categoryData}
          />
        </ScrollView>
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
