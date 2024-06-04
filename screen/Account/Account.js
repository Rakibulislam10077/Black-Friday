import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
  Modal,
  Alert,
} from "react-native";
import React, { useState } from "react";
import {
  BackArrow2,
  EmailIcon,
  EmptyHeart,
  FAQ,
  RatingsIcon,
  TikMark,
  UserIcon,
  WhatsappIcon,
} from "../../constants/AllSvg";
import { AccountStyle } from "./AccountStyle";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "react-native-paper";
import { LoginStyle } from "../../components/login/LoginStyle";
import { countries } from "../../constants/Countries";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect } from "react";
import {
  refetchHomeCouponData,
  refetchHomeDealData,
  refetchHomeStore,
  refetchHomeVoucherData,
} from "../home/Home";
import { refreshStoreDataFromStore } from "../store/Store";
import { refreshDataFromCouponPage } from "../Coupon/Coupon";
import { refetchCarousel } from "../../components/carousel/Carousels";
import { useAllCoupon } from "../../hooks/AllHooks";
const Account = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [countryPhotoURL, setCountryPhotoURL] = useState("");
  const [refetchCountry, setRefetchCounty] = useState(0);
  const { allCoupon } = useAllCoupon();
  const refetchHomeStoreData = refetchHomeStore;
  const refetchHomePostCouponData = refetchHomeCouponData;
  const refetchHomePostDealData = refetchHomeDealData;
  const refetchHomePostVoucherData = refetchHomeVoucherData;
  const refetchStoreDataFromStore = refreshStoreDataFromStore;
  const refetchCouponDataFromCoupon = refreshDataFromCouponPage;
  const refetchCarouselFromCarousel = refetchCarousel;
  const handleSelectCountry = async (country) => {
    setSelectedCountry(country);
    await AsyncStorage.setItem("selected_country", country.name);
  };

  useEffect(() => {
    const getCountry = async () => {
      const userCountry = await AsyncStorage.getItem("selected_country");
      const selected_country = countries.find(
        (country) => country.name === userCountry
      );
      setCountryPhotoURL(selected_country.img);
    };
    getCountry();
  }, [refetchCountry]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={AccountStyle.headerContainer}>
        <View style={AccountStyle.backArrowAndTitle}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrow2 />
          </TouchableOpacity>
          <Text style={AccountStyle.title}>Account</Text>
        </View>
        <TouchableOpacity
          style={AccountStyle.countryBox}
          onPress={() => {
            setRefetchCounty((prev) => prev + 1);
            setModalVisible(true);
          }}
        >
          <Image style={AccountStyle.img} source={countryPhotoURL} />
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView>
          <View style={{ paddingHorizontal: 20 }}>
            <TouchableOpacity
              onPress={() => Alert.alert("laksdjf;kasjdfj")}
              style={AccountStyle.boxes}
            >
              <View style={AccountStyle.iconAndText}>
                <EmptyHeart />
                <Text style={AccountStyle.text}>Favorite</Text>
              </View>
            </TouchableOpacity>
            <Divider style={AccountStyle.divider} />
            <TouchableOpacity
              onPress={() => navigation.navigate("PrivacyPolicy")}
              style={AccountStyle.boxes}
            >
              <View style={AccountStyle.iconAndText}>
                <FAQ />
                <Text style={AccountStyle.text}>Privacy Policy</Text>
              </View>
            </TouchableOpacity>
            <Divider style={AccountStyle.divider} />
            <TouchableOpacity style={AccountStyle.ContactConBoxes}>
              <View style={AccountStyle.iconAndText}>
                <WhatsappIcon />
                <View>
                  <Text style={AccountStyle.text}>Talk to Us</Text>
                  <Text style={AccountStyle.subText}>
                    Need help? Chat with us by whatsapp
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("mailto://hellomenacoupon@gmail.com")
              }
              style={[AccountStyle.ContactConBoxes]}
            >
              <View style={AccountStyle.iconAndText}>
                <EmailIcon />
                <View>
                  <Text style={AccountStyle.text}>Email Us</Text>
                  <Text style={AccountStyle.subText}>
                    Send us questions, message or ask about coupon.
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <Divider style={AccountStyle.divider} />
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "https://play.google.com/store/apps/details?id=com.expertsquad.net.menacoupon&pcampaignid=web_share"
                )
              }
              style={AccountStyle.boxes}
            >
              <View style={AccountStyle.iconAndText}>
                <RatingsIcon />
                <View>
                  <Text style={AccountStyle.text}>Review on PlayStore</Text>
                  <Text style={AccountStyle.subText}>
                    Please Review our app on playstore
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
            <Divider style={AccountStyle.divider} />
            <Text
              style={[
                AccountStyle.subText,
                { marginTop: 20, alignSelf: "center" },
              ]}
            >
              Version: 1.0.0
            </Text>
          </View>
        </ScrollView>
      </View>
      <Modal animationType="slide" visible={modalVisible}>
        <View style={LoginStyle.countryPageHeader}>
          <View style={LoginStyle.arrowAndTextCon}>
            <TouchableOpacity
              style={{ marginRight: 10 }}
              onPress={() => setModalVisible(false)}
            >
              <BackArrow2 />
            </TouchableOpacity>
            <Text style={LoginStyle.headerTitle}>Continue with country</Text>
          </View>
        </View>
        <ScrollView>
          <View style={LoginStyle.countryBoxtInModal}>
            <Text style={LoginStyle.selectCountryText}>
              {" "}
              Please Select Your country
            </Text>
            {countries?.map((country) => {
              return (
                <TouchableOpacity
                  key={country?.id}
                  onPress={() => handleSelectCountry(country)}
                  style={LoginStyle.selectedBox}
                >
                  <View style={LoginStyle.flagAndNameBox}>
                    <Image style={LoginStyle.flag} source={country?.img} />
                    <Text>{country?.name}</Text>
                  </View>
                  {selectedCountry?.id === country?.id && <TikMark />}
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={async () => {
            setModalVisible(false);
            setRefetchCounty((prev) => prev + 1);
            await refetchHomeStoreData((prev) => prev + 1);
            await refetchHomePostCouponData((prev) => prev + 1);
            await refetchHomePostDealData((prev) => prev + 1);
            await refetchHomePostVoucherData((prev) => prev + 1);
            await refetchStoreDataFromStore((prev) => prev + 1);
            await refetchCouponDataFromCoupon((prev) => prev + 1);
            await refetchCarouselFromCarousel((prev) => prev + 1);
          }}
          style={LoginStyle.saveAndContinueBtn}
        >
          <Text style={LoginStyle.btnText}>Save And Continue</Text>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

export default Account;
