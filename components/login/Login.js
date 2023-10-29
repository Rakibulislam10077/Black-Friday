import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  Modal,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { LoginStyle } from "./LoginStyle";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import {
  BackArrow,
  BackArrow2,
  TikMark,
  UpArrow,
} from "../../constants/AllSvg";

const Login = () => {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={LoginStyle.loginUserSection}>
        <Image source={require("../../assets/image/userLogo.png")} />
        <Text style={LoginStyle.title}>Let’s sign you in</Text>
        <Text style={LoginStyle.subTitle}>
          You have a account Please log in your Account
        </Text>
      </View>
      <View style={LoginStyle.inputSection}>
        <View style={LoginStyle.inputBox}>
          <Text style={LoginStyle.label}>Email</Text>
          <TextInput style={LoginStyle.input} placeholder="Emain" />
        </View>
        <Divider style={LoginStyle.Divider} />
        <View style={LoginStyle.inputBox}>
          <Text style={LoginStyle.label}>Password</Text>
          <TextInput style={LoginStyle.input} placeholder="Password" />
        </View>
        <Divider style={LoginStyle.Divider} />

        <TouchableOpacity>
          <Text style={LoginStyle.forgotText}>Forgot password</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.5} style={LoginStyle.signinButton}>
          <Text style={LoginStyle.loginText}>Sing in</Text>
        </TouchableOpacity>
        <Text style={LoginStyle.signinPageText}>
          Don’t Have an account?{" "}
          <Text
            style={LoginStyle.signInpageLinkText}
            onPress={() => navigation.navigate("SignUp")}
          >
            Sign up
          </Text>
        </Text>
      </View>
      <View style={LoginStyle.countrySelectionBox}>
        <View style={LoginStyle.selectedCountrybox}>
          <Text>Continue with Country</Text>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={LoginStyle.flagBox}
          >
            <Image
              style={LoginStyle.country}
              source={require("../../assets/image/flag.png")}
            />
            <Text>USA</Text>
            <UpArrow />
          </TouchableOpacity>
        </View>
      </View>
      <Modal animationType="slide" visible={modalVisible}>
        <View style={LoginStyle.countryPageHeader}>
          <View style={LoginStyle.arrowAndTextCon}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
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
            navigation.navigate("Home");
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

export default Login;
