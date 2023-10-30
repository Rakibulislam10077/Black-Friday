import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeStyle } from "./HomeStyle";
import {
  Electronics,
  Fashion,
  Magnify,
  Newest,
  NotificationBell,
  Tranding,
} from "../../constants/AllSvg";
import { Divider } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Chiep from "../../components/chiep/Chiep";
import Deals from "../../components/deals/Deals";
import Carousel from "../../components/carousel/Carousel";
import Voucher from "../../components/voucher/Voucher";
import Category from "../../components/categry/Category";

const Home = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* =========header start here=========== */}
      <View style={HomeStyle.headercontainer}>
        <View>
          <Image source={require("../../assets/image/logo.png")} />
        </View>
        <View style={HomeStyle.MagnifyAndBell}>
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <Magnify />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Notification")}
            style={HomeStyle.notificationBell}
          >
            <NotificationBell />
          </TouchableOpacity>
        </View>
      </View>
      {/* =========header end here=========== */}
      <Divider style={HomeStyle.Divider} />
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* ==========category start here=========*/}
        <Category />
        {/* ==========category end here=========*/}
        {/* =============chip item start here============== */}
        <Chiep />
        {/* =============chip item end here============== */}
        {/* =============carousel start here============== */}
        {/* <Carousel /> */}
        {/* =============carousel end here============== */}
        {/* ============Top used product deals start here============== */}
        <View style={HomeStyle.dealSectionContainer}>
          {/* top deals header */}
          <View style={HomeStyle.dealsHeader}>
            <View>
              <Text style={HomeStyle.topDealsTitle}>
                Top used product deals
              </Text>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Deals")}>
              <Text style={HomeStyle.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Deals />
          </View>
          {/* ==================deals Item section start here=================== */}
          <View></View>
          {/* ==================deals Item section end here=================== */}
        </View>
        {/* ============Top used product deals end here============== */}
        {/* ============== top store start here ========================= */}
        <View style={HomeStyle.topStoreContainer}>
          <View style={HomeStyle.topStoreHeader}>
            <Text style={HomeStyle.topStorTitle}>Top store</Text>
            <TouchableOpacity>
              <Text style={HomeStyle.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={true}>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProductDetails")}
              style={HomeStyle.topStoreItem}
            >
              <Image
                style={HomeStyle.topStoreImg}
                source={require("../../assets/image/noon.png")}
              />
              <Text style={HomeStyle.storeName}>Noon</Text>
              <Divider style={HomeStyle.storeDivider} />
              <Text style={HomeStyle.storeOfferText}>4 offers</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        {/* ============== top store ends here ========================= */}
        {/* ============Best coupon section start here ================= */}
        <View style={HomeStyle.bestCouponContainer}>
          <View style={HomeStyle.bestCouponHeader}>
            <Text style={HomeStyle.bestCouponTitle}>Best Coupons</Text>
            <TouchableOpacity>
              <Text style={HomeStyle.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          {/* ============================ */}
          <View style={HomeStyle.bestCouponCartCon}>
            <TouchableOpacity style={HomeStyle.bestCouponCart}>
              <TouchableOpacity style={HomeStyle.couponLogoAndTextCon}>
                <Image
                  style={HomeStyle.couponLogo}
                  source={require("../../assets/image/logo.png")}
                />
                <Text>hello</Text>
              </TouchableOpacity>
            </TouchableOpacity>
            <TouchableOpacity
              style={HomeStyle.bestCouponCart}
            ></TouchableOpacity>
          </View>
        </View>
        {/* ============Best coupon section ends here ================= */}
        {/* ================popular Voucher section start here================ */}
        <View style={HomeStyle.topStoreContainer}>
          <View style={HomeStyle.topStoreHeader}>
            <Text style={HomeStyle.topStorTitle}>Top store</Text>
            <TouchableOpacity>
              <Text style={HomeStyle.seeAllText}>See All</Text>
            </TouchableOpacity>
          </View>
          <Voucher />
        </View>
        {/* ================popular Voucher section start here================ */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
