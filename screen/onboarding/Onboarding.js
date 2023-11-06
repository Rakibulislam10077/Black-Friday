import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Modal,
  ToastAndroid,
} from "react-native";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { LoginStyle } from "../../components/login/LoginStyle";
import { BackArrow2, TikMark } from "../../constants/AllSvg";
import { ScrollView } from "react-native-gesture-handler";
import { countries } from "../../constants/Countries";
const Onboard = () => {
  const navigation = useNavigation();
  const { height, width } = Dimensions.get("window");
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const DotComponent = ({ selected }) => {
    return (
      <View style={selected ? styles.selectedDot : styles.defaultDot}></View>
    );
  };

  const handleSelectedCountry = async (country) => {
    setSelectedCountry(country);
    await AsyncStorage.setItem("selected_country", country.name);
  };

  const handleDone = async () => {
    setModalVisible(true);
  };

  const handleSelectCountryDone = async () => {
    if (!selectedCountry) {
      return ToastAndroid.show("Please select a country!", ToastAndroid.SHORT);
    } else {
      setModalVisible(false);
      navigation.navigate("TabScreen");
      await AsyncStorage.setItem("setOnboard", "1");
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Onboarding
        containerStyles={{
          paddingHorizontal: 20,
        }}
        showNext={false}
        DotComponent={DotComponent}
        showSkip={false}
        bottomBarHighlight={false}
        DoneButtonComponent={(doneButton = () => {})}
        pages={[
          {
            backgroundColor: "#FFF",
            image: (
              <View
                style={{
                  width: "90%",
                  height: 320,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 20,
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{ height: "100%", width: "100%" }}
                  source={require("../../assets/image/OV1.png")}
                />
              </View>
            ),
            title: "Best Coupon",
            subtitle:
              "It is a long established fact that a reader will be distracted by the readable content ",
          },
          {
            backgroundColor: "#FFF",
            image: (
              <View
                style={{
                  width: "90%",
                  height: 320,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 20,
                }}
              >
                <Image
                  style={{ height: "100%", width: "100%" }}
                  resizeMode="contain"
                  source={require("../../assets/image/OV2.png")}
                />
              </View>
            ),
            title: "Shopping",
            subtitle:
              "It is a long established fact that a reader will be distracted by the readable content ",
          },
          {
            backgroundColor: "#FFF",
            image: (
              <View
                style={{
                  width: "90%",
                  height: 320,
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 20,
                }}
              >
                <Image
                  style={{ height: "100%", width: "100%" }}
                  resizeMode="contain"
                  source={require("../../assets/image/OV3.png")}
                />
              </View>
            ),
            title: "Explore & Enjoy",
            subtitle: (
              <View style={[styles.subTitleAndButtonContainer]}>
                <Text style={styles.subTitle}>
                  It is a long established fact that a reader will be distracted
                  by the readable content
                </Text>
                <TouchableOpacity
                  onPress={() => handleDone()}
                  style={[styles.getStartBtn, { width: width * 0.7 }]}
                >
                  <Text style={styles.getBtnText}>Get Start</Text>
                </TouchableOpacity>
              </View>
            ),
          },
        ]}
      />
      <Modal animationType="slide" visible={modalVisible}>
        <View style={LoginStyle.countryPageHeader}>
          <View style={LoginStyle.arrowAndTextCon}>
            {/* <TouchableOpacity onPress={() => setModalVisible(false)}>
              <BackArrow2 />
            </TouchableOpacity> */}
            <Text style={LoginStyle.headerTitle}>Continue with country</Text>
          </View>
        </View>
        <ScrollView>
          <View style={LoginStyle.countryBoxtInModal}>
            <Text style={LoginStyle.selectCountryText}>
              {" "}
              Please Select Your country
            </Text>
            {countries.map((country) => {
              return (
                <TouchableOpacity
                  key={country?.id}
                  onPress={() => handleSelectedCountry(country)}
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
          onPress={() => {
            handleSelectCountryDone();
          }}
          style={LoginStyle.saveAndContinueBtn}
        >
          <Text style={LoginStyle.btnText}>Save And Continue</Text>
        </TouchableOpacity>
      </Modal>
    </SafeAreaView>
  );
};

export default Onboard;

const styles = StyleSheet.create({
  selectedDot: {
    backgroundColor: "#57467A",
    width: 24,
    height: 6,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  defaultDot: {
    backgroundColor: "#57467A",
    width: 6,
    height: 6,
    borderRadius: 5,
    opacity: 0.2,
    marginHorizontal: 5,
  },
  subTitleAndButtonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  subTitle: {
    color: "#000",
    textAlign: "center",
  },
  getStartBtn: {
    backgroundColor: "#57467A",
    marginTop: 20,
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 50,
  },
  getBtnText: {
    fontSize: 20,
    color: "#fff",
  },
});
