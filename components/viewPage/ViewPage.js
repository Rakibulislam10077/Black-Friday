import {
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  Button,
  Linking,
  Dimensions,
  Alert,
  Pressable,
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
import { Divider, Modal, PaperProvider, Portal } from "react-native-paper";
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
import DealsItem from "../dealsItem/DealsItem";
import VoucherItem from "../voucherItem/VoucherItem";
import { ScrollView } from "react-native-gesture-handler";
const ViewStore = (props) => {
  const data = props?.route?.params;
  // data from coupon file in screen folder
  const navigation = useNavigation(); // navigation
  const [selected, setSelected] = React.useState(0);
  const [showMoreButton, setShowMoreButton] = useState(false);
  const [textShown, setTextShown] = useState(false);
  const [numLines, setNumLines] = useState(undefined);

  const toggleTextShown = () => {
    setTextShown(!textShown);
  };

  useEffect(() => {
    setNumLines(textShown ? undefined : 3);
  }, [textShown]);

  const onTextLayout = useCallback(
    (e) => {
      if (e.nativeEvent.lines.length > 3 && !textShown) {
        setShowMoreButton(true);
        setNumLines(3);
      }
    },
    [textShown]
  );

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
              source={{
                uri:
                  data?.store?.storePhotoURL ||
                  data?.postPhotoURL ||
                  data?.storePhotoURL,
              }}
            />
          </TouchableOpacity>
          <View style={ViewPageStyle.SN_And_Rn_Con}>
            <Text style={ViewPageStyle.storeBrandName}>
              {data?.storeName || data?.store?.storeName}
            </Text>
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
                return Alert.alert("lsakdflkasdfl");
              }}
              style={ViewPageStyle.startCon}
            >
              <Star />
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={() => addOrRemoveFav(item)}
              onPress={() => {
                return Alert.alert("aslkdfkasdjf");
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
            opacity: 0.1,
          }}
        />
        <Text
          onTextLayout={onTextLayout}
          numberOfLines={numLines}
          style={{
            color: "rgba(0,0,0,0.4)",
            fontSize: 13,
            marginTop: 10,
            marginBottom: 10,
            textAlign: "center",
            paddingHorizontal: 30,
          }}
        >
          {data?.storeDescription || data?.postDescription}
        </Text>
        {showMoreButton ? (
          <TouchableOpacity
            onPress={toggleTextShown}
            style={{
              width: 95,
              height: 30,
              borderRadius: 5,
              borderColor: textShown ? "#ff9999" : "#ededed",
              alignSelf: "center",
              borderWidth: 2,
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 10,
              backgroundColor: textShown ? "#ff4d4d" : "#d0d0d0",
            }}
          >
            <Text
              style={{
                color: "#000",
                fontSize: 14,
                fontWeight: "700",
              }}
            >
              {textShown ? "Read Less" : "Read More"}
            </Text>
          </TouchableOpacity>
        ) : null}
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
        <DealsItem
          storeName={data?.store?.storeName || data?.storeName}
          postType="Deal"
          store={data}
        />
      ) : selected == 1 ? (
        <CouponItem
          storeName={data?.store?.storeName || data?.storeName}
          postType="Coupon"
          store={data}
        />
      ) : selected == 2 ? (
        <VoucherItem
          storeName={data?.store?.storeName || data?.storeName}
          postType="Voucher"
          store={data}
        />
      ) : (
        <HowToUs />
      )}
      {/* bottom visit button container */}
      <View style={ViewPageStyle.bottomBtnForVisit}>
        <View style={ViewPageStyle.imgAndTextCon}>
          <Image
            style={ViewPageStyle.btmBtnImg}
            resizeMode="contain"
            source={{
              uri: data?.store?.storePhotoURL || data?.storePhotoURL,
            }}
          />
          <Text style={ViewPageStyle.bttmBtnText}>
            {data?.store?.storeName || data?.storeName}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => Linking.openURL(data?.storeLink || data?.dealLink)}
          style={ViewPageStyle.visitBtn}
        >
          <Text style={ViewPageStyle.visitBtnText}>Visit store</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ViewStore;
