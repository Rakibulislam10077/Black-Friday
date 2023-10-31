import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
  Modal,
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
const Account = () => {
  const navigation = useNavigation();

  const [modalVisible, setModalVisible] = useState(false);
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
          onPress={() => setModalVisible(true)}
        >
          <Image
            style={AccountStyle.img}
            source={require("../../assets/image/flag.png")}
          />
        </TouchableOpacity>
      </View>
      <View>
        <ScrollView>
          <View style={{ paddingHorizontal: 20 }}>
            <TouchableOpacity style={AccountStyle.boxes}>
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
            <TouchableOpacity style={AccountStyle.boxes}>
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
            <View style={LoginStyle.selectedBox}>
              <View style={LoginStyle.flagAndNameBox}>
                <Image
                  style={LoginStyle.flag}
                  source={require("../../assets/image/flag.png")}
                />
                <Text>United State</Text>
              </View>
              <TikMark />
            </View>
            <View style={LoginStyle.selectedBox}>
              <View style={LoginStyle.flagAndNameBox}>
                <Image
                  style={LoginStyle.flag}
                  source={require("../../assets/image/flag.png")}
                />
                <Text>United State</Text>
              </View>
              <TikMark />
            </View>
            <View style={LoginStyle.selectedBox}>
              <View style={LoginStyle.flagAndNameBox}>
                <Image
                  style={LoginStyle.flag}
                  source={require("../../assets/image/flag.png")}
                />
                <Text>United State</Text>
              </View>
              <TikMark />
            </View>
            <View style={LoginStyle.selectedBox}>
              <View style={LoginStyle.flagAndNameBox}>
                <Image
                  style={LoginStyle.flag}
                  source={require("../../assets/image/flag.png")}
                />
                <Text>United State</Text>
              </View>
              <TikMark />
            </View>
            <View style={LoginStyle.selectedBox}>
              <View style={LoginStyle.flagAndNameBox}>
                <Image
                  style={LoginStyle.flag}
                  source={require("../../assets/image/flag.png")}
                />
                <Text>United State</Text>
              </View>
              <TikMark />
            </View>
            <View style={LoginStyle.selectedBox}>
              <View style={LoginStyle.flagAndNameBox}>
                <Image
                  style={LoginStyle.flag}
                  source={require("../../assets/image/flag.png")}
                />
                <Text>United State</Text>
              </View>
              <TikMark />
            </View>
            <View style={LoginStyle.selectedBox}>
              <View style={LoginStyle.flagAndNameBox}>
                <Image
                  style={LoginStyle.flag}
                  source={require("../../assets/image/flag.png")}
                />
                <Text>United State</Text>
              </View>
              <TikMark />
            </View>
            <View style={LoginStyle.selectedBox}>
              <View style={LoginStyle.flagAndNameBox}>
                <Image
                  style={LoginStyle.flag}
                  source={require("../../assets/image/flag.png")}
                />
                <Text>United State</Text>
              </View>
              <TikMark />
            </View>
            <View style={LoginStyle.selectedBox}>
              <View style={LoginStyle.flagAndNameBox}>
                <Image
                  style={LoginStyle.flag}
                  source={require("../../assets/image/flag.png")}
                />
                <Text>United State</Text>
              </View>
              <TikMark />
            </View>
            <View style={LoginStyle.selectedBox}>
              <View style={LoginStyle.flagAndNameBox}>
                <Image
                  style={LoginStyle.flag}
                  source={require("../../assets/image/flag.png")}
                />
                <Text>United State</Text>
              </View>
              <TikMark />
            </View>
            <View style={LoginStyle.selectedBox}>
              <View style={LoginStyle.flagAndNameBox}>
                <Image
                  style={LoginStyle.flag}
                  source={require("../../assets/image/flag.png")}
                />
                <Text>United State</Text>
              </View>
              <TikMark />
            </View>
            <View style={LoginStyle.selectedBox}>
              <View style={LoginStyle.flagAndNameBox}>
                <Image
                  style={LoginStyle.flag}
                  source={require("../../assets/image/flag.png")}
                />
                <Text>United State</Text>
              </View>
              <TikMark />
            </View>
            <View style={LoginStyle.selectedBox}>
              <View style={LoginStyle.flagAndNameBox}>
                <Image
                  style={LoginStyle.flag}
                  source={require("../../assets/image/flag.png")}
                />
                <Text>United State</Text>
              </View>
              <TikMark />
            </View>
            <View style={LoginStyle.selectedBox}>
              <View style={LoginStyle.flagAndNameBox}>
                <Image
                  style={LoginStyle.flag}
                  source={require("../../assets/image/flag.png")}
                />
                <Text>United State</Text>
              </View>
              <TikMark />
            </View>
            <View style={LoginStyle.selectedBox}>
              <View style={LoginStyle.flagAndNameBox}>
                <Image
                  style={LoginStyle.flag}
                  source={require("../../assets/image/flag.png")}
                />
                <Text>United State</Text>
              </View>
              <TikMark />
            </View>
            <View style={LoginStyle.selectedBox}>
              <View style={LoginStyle.flagAndNameBox}>
                <Image
                  style={LoginStyle.flag}
                  source={require("../../assets/image/flag.png")}
                />
                <Text>United State</Text>
              </View>
              <TikMark />
            </View>
            <View style={LoginStyle.selectedBox}>
              <View style={LoginStyle.flagAndNameBox}>
                <Image
                  style={LoginStyle.flag}
                  source={require("../../assets/image/flag.png")}
                />
                <Text>United State</Text>
              </View>
              <TikMark />
            </View>
            <View style={LoginStyle.selectedBox}>
              <View style={LoginStyle.flagAndNameBox}>
                <Image
                  style={LoginStyle.flag}
                  source={require("../../assets/image/flag.png")}
                />
                <Text>United State</Text>
              </View>
              <TikMark />
            </View>
            <View style={LoginStyle.selectedBox}>
              <View style={LoginStyle.flagAndNameBox}>
                <Image
                  style={LoginStyle.flag}
                  source={require("../../assets/image/flag.png")}
                />
                <Text>United State</Text>
              </View>
              <TikMark />
            </View>
            <View style={LoginStyle.selectedBox}>
              <View style={LoginStyle.flagAndNameBox}>
                <Image
                  style={LoginStyle.flag}
                  source={require("../../assets/image/flag.png")}
                />
                <Text>United State</Text>
              </View>
              <TikMark />
            </View>
            <View style={LoginStyle.selectedBox}>
              <View style={LoginStyle.flagAndNameBox}>
                <Image
                  style={LoginStyle.flag}
                  source={require("../../assets/image/flag.png")}
                />
                <Text>United State</Text>
              </View>
              <TikMark />
            </View>
            <View style={LoginStyle.selectedBox}>
              <View style={LoginStyle.flagAndNameBox}>
                <Image
                  style={LoginStyle.flag}
                  source={require("../../assets/image/flag.png")}
                />
                <Text>United State</Text>
              </View>
              <TikMark />
            </View>
            <View style={LoginStyle.selectedBox}>
              <View style={LoginStyle.flagAndNameBox}>
                <Image
                  style={LoginStyle.flag}
                  source={require("../../assets/image/flag.png")}
                />
                <Text>United State</Text>
              </View>
              <TikMark />
            </View>
            <View style={LoginStyle.selectedBox}>
              <View style={LoginStyle.flagAndNameBox}>
                <Image
                  style={LoginStyle.flag}
                  source={require("../../assets/image/flag.png")}
                />
                <Text>United State</Text>
              </View>
              <TikMark />
            </View>
            <View style={LoginStyle.selectedBox}>
              <View style={LoginStyle.flagAndNameBox}>
                <Image
                  style={LoginStyle.flag}
                  source={require("../../assets/image/flag.png")}
                />
                <Text>United State</Text>
              </View>
              <TikMark />
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => {
            // navigation.navigate("Home");
            setModalVisible(false);
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
