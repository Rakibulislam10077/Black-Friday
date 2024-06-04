import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useLayoutEffect, useState } from "react";
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
import EmptyData from "../../Shared/EmptyData";
import Empty_ViewPage from "../../Shared/Empty_ViewPage";

const CampaignViewPage = (props) => {
  const campaignDataFromHome = props?.route?.params;
  const navigation = useNavigation();
  const { campaign } = useCampaign();
  const [selectedCampaign, setSelectedCampaign] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [categoryActive, setCategoryActice] = useState(false);
  const { allCoupon, couponDataLoading, setRefreshCoupon } = useAllCoupon(
    `${selectedCampaign && `&campaignName=${selectedCampaign}`}&${
      selectedCategory &&
      categoryActive === true &&
      `categoryName=${selectedCategory}`
    }`
  );
  console.log(categoryActive);
  const { categoryData } = useAllCategory();
  useLayoutEffect(() => {
    setSelectedCampaign(campaignDataFromHome?.campaignName);
    setRefreshCoupon((prev) => prev + 1);
  }, []);

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
          <Chiep
            campaign={campaign}
            setSelectedCampaign={setSelectedCampaign}
            campaignDataFromHome={campaignDataFromHome}
            setRefreshCoupon={setRefreshCoupon}
          />
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
            setCategoryActice={setCategoryActice}
            categoryActive={categoryActive}
          />
        </ScrollView>
      </View>
      {/* category item end */}
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        {couponDataLoading ? (
          <LoadingSpinner />
        ) : allCoupon.length === 0 ? (
          <Empty_ViewPage />
        ) : (
          <ScrollView
            contentContainerStyle={{
              paddingBottom: 50,
              paddingTop: 20,
            }}
          >
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
