import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  Button,
  Linking,
  Dimensions,
} from "react-native";
import { Svg, Path, G, Defs, ClipPath, Rect } from "react-native-svg";
import React, {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import Deals from "../deals/Deals";
import CouponItem from "../couponItem/CouponItem";
import Voucher from "../voucher/Voucher";
import HowToUs from "../howToUse/HowToUs";
import { ViewPageStyle } from "./ViewPageStyle";
import {
  BackArrow2,
  EmptyHeart,
  SmallStart,
  Star,
} from "../../constants/AllSvg";
const ViewStore = () => {
  // data from coupon file in screen folder
  const navigation = useNavigation(); // navigation
  const [selected, setSelected] = React.useState(0);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "#fff",
          borderBottomWidth: 10,
          borderBottomColor: "rgba(0,0,0,0.1)",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingTop: 20,
            paddingLeft: 25,
            paddingBottom: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrow2 />
          </TouchableOpacity>
          <Text style={{ fontSize: 16, opacity: 0.5, marginLeft: 22 }}>
            Store Details
          </Text>
        </View>
        <View style={ViewPageStyle.storeBranding}>
          <TouchableOpacity style={[ViewPageStyle.storeImgCon]}>
            <Image
              style={{ width: 60, height: 60 }}
              resizeMode="contain"
              source={{}}
            />
          </TouchableOpacity>
          <View style={ViewPageStyle.SN_And_Rn_Con}>
            <Text style={ViewPageStyle.storeBrandName}>Noon</Text>
            <View style={{ flexDirection: "row", marginTop: 10 }}>
              {/* ============================= */}
              <SmallStart />
              <SmallStart />
              <SmallStart />
              <SmallStart />
              <SmallStart />
            </View>
            <Text
              style={{
                fontSize: 12,
                color: "#bdbdbd",
                marginTop: 10,
                fontStyle: "italic",
              }}
            >
              Review are coming soon..
            </Text>
          </View>
          {/* favourite_and_rating_container */}
          <View style={ViewPageStyle.ST_and_FV}>
            <TouchableOpacity
              onPress={() => {
                return <ComingSoonAlert />;
              }}
              style={ViewPageStyle.startCon}
            >
              <Star />
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={() => addOrRemoveFav(item)}
              onPress={() => {
                return <ComingSoonAlert />;
              }}
              style={ViewPageStyle.startCon}
            >
              <EmptyHeart />
            </TouchableOpacity>
          </View>
        </View>
        <Divider
          style={{
            height: 1,
            width: "90%",
            alignSelf: "center",
            opacity: 0.3,
          }}
        />
        <Text
          // numberOfLines={}
          style={{
            color: "rgba(0,0,0,0.4)",
            fontSize: 13,
            marginTop: 15,
            marginBottom: 15,
            textAlign: "center",
            paddingHorizontal: 30,
          }}
        >
          lkdsflkasdjflkjsdafkljasdfkja;lskdjf;lkadsjf
        </Text>
      </View>
      <View style={ViewPageStyle.TabNavigateContainer}>
        <TouchableOpacity
          onPress={() => {
            setSelected(0);
          }}
          style={{
            borderBottomColor: selected == 0 ? "#283D27" : "#fff",
            borderBottomWidth: 1,
            paddingBottom: 10,
            width: 70,
            marginBottom: 0,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: selected == 0 ? "#000" : "#797979",
              fontWeight: selected == 0 ? "bold" : "400",
            }}
          >
            Deals
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelected(1);
          }}
          style={{
            borderBottomColor: selected == 1 ? "#283D27" : "#fff",
            borderBottomWidth: 1,
            paddingBottom: 10,
            width: 80,
            marginBottom: 0,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: selected == 1 ? "#000" : "#797979",
              fontWeight: selected == 1 ? "bold" : "400",
            }}
          >
            Coupon
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelected(2);
          }}
          style={{
            borderBottomColor: selected == 2 ? "#283D27" : "#fff",
            borderBottomWidth: 1,
            paddingBottom: 10,
            width: 80,
            marginBottom: 0,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: selected == 2 ? "#000" : "#797979",
              fontWeight: selected == 2 ? "bold" : "400",
            }}
          >
            Voucher
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSelected(3);
          }}
          style={{
            borderBottomColor: selected == 3 ? "#283D27" : "#fff",
            borderBottomWidth: 1,
            paddingBottom: 10,
            width: 100,
            marginBottom: 0,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: selected == 3 ? "#000" : "#797979",
              fontWeight: selected == 3 ? "bold" : "400",
            }}
          >
            How to Use
          </Text>
        </TouchableOpacity>
      </View>
      {/* <Divider /> */}
      {selected == 0 ? (
        <Deals />
      ) : selected == 1 ? (
        <CouponItem />
      ) : selected == 2 ? (
        <Voucher />
      ) : (
        <HowToUs />
      )}
      {/* bottom visit button container */}
      <View style={ViewPageStyle.bottomBtnForVisit}>
        <View style={ViewPageStyle.imgAndTextCon}>
          <Image
            style={ViewPageStyle.bttmBtnImg}
            resizeMode="contain"
            source={{}}
          />
          <Text style={ViewPageStyle.bttmBtnText}>Noon</Text>
        </View>
        <TouchableOpacity
          onPress={() => Linking.openURL("http:www.google.com")}
          style={ViewPageStyle.visitBtn}
        >
          <Text style={ViewPageStyle.visitBtnText}>Visit store</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ViewStore;
