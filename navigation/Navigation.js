import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "../screen/Account/Account";
import Coupon from "../screen/Coupon/Coupon";
import Home from "../screen/home/Home";
import Store from "../screen/store/Store";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Svg,
  G,
  Path,
  Rect,
  Defs,
  Linking,
} from "react-native";
// import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";
import Notification from "../components/notification/Notification";
import Search from "../components/search/Search";
import Deals from "../components/deals/Deals";
import ProductDetails from "../components/productDetails/ProductDetails";
import Login from "../components/login/Login";
import SignUp from "../components/signup/SignUp";
import Onboard from "../screen/onboarding/Onboarding";
import ViewPage from "../components/viewPage/ViewPage";
import AllVoucher from "../components/allVoucher/AllVoucher";
import AllProduct from "../components/allProduct/AllProduct";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import CouponAndDealCart from "../components/couponAndDealCart/CouponAndDealCart";
import MaterialCommunityIcons from "react-native-vector-icons";
import {
  ActiveAccountIcon,
  ActiveCoupon,
  ActiveHomeIcon,
  ActiveStoreIcon,
  DefaultAccountIcon,
  DefaultCouponIcon,
  DefaultHomeIcon,
  DefaultStoreIcon,
  WhatsappIconInTab,
} from "../constants/AllSvg";
import CampaignViewPage from "../components/compainViewPage/CampaignViewPage";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const TabScreen = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 60,
            shadowColor: "#000",
            elevation: 13,
            borderTopColor: "#fff",
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  {focused ? <ActiveHomeIcon /> : <DefaultHomeIcon />}
                  <Text
                    style={{
                      color: focused ? "#283D27" : "rgba(0, 0, 0, 0.5)",
                      fontWeight: focused ? "600" : "400",
                      fontSize: 12,
                    }}
                  >
                    Home
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Store"
          component={Store}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  {focused ? <ActiveStoreIcon /> : <DefaultStoreIcon />}
                  <Text
                    style={{
                      color: focused ? "#283D27" : "rgba(0, 0, 0, 0.5)",
                      fontWeight: focused ? "600" : "400",
                      fontSize: 12,
                    }}
                  >
                    Store
                  </Text>
                </View>
              );
            },
          }}
        />
        {/* <Tab.Screen name="Whatsapp" component={""} /> */}
        <Tab.Screen
          name="whatsapp"
          component={""}
          options={{
            tabBarIcon: () => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() => Linking.openURL(`https://wa.me/`)}
                  style={{ marginTop: -40 }}
                >
                  <WhatsappIconInTab />
                </TouchableOpacity>
              );
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Coupon"
          component={Coupon}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  {focused ? <ActiveCoupon /> : <DefaultCouponIcon />}
                  <Text
                    style={{
                      color: focused ? "#283D27" : "rgba(0, 0, 0, 0.5)",
                      fontWeight: focused ? "600" : "400",
                      fontSize: 12,
                    }}
                  >
                    Offers
                  </Text>
                </View>
              );
            },
          }}
        />
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            headerShown: false,
            tabBarIcon: ({ focused }) => {
              return (
                <View
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  {focused ? <ActiveAccountIcon /> : <DefaultAccountIcon />}
                  <Text
                    style={{
                      color: focused ? "#283D27" : "rgba(0, 0, 0, 0.5)",
                      fontWeight: focused ? "600" : "400",
                      fontSize: 12,
                    }}
                  >
                    Account
                  </Text>
                </View>
              );
            },
          }}
        />
      </Tab.Navigator>
    </GestureHandlerRootView>
  );
};

const StackNavigation = () => {
  const [showOnboarding, setShowOnboarding] = React.useState(null);

  React.useEffect(() => {
    const checkIfAlreadyOnborded = async () => {
      let onboard = await AsyncStorage.getItem("setOnboard");
      if (onboard == 1) {
        setShowOnboarding(false);
      } else {
        setShowOnboarding(true);
      }
    };
    checkIfAlreadyOnborded();
  }, []);

  if (showOnboarding == null) {
    return null;
  }

  if (showOnboarding) {
    return (
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          options={{ headerShown: false }}
          name="TabScreen"
          component={TabScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Notification"
          component={Notification}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Search"
          component={Search}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Deals"
          component={Deals}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ProductDetails"
          component={ProductDetails}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="CampaignViewPage"
          component={CampaignViewPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Onboarding"
          component={Onboard}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ViewPage"
          component={ViewPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AllVoucher"
          component={AllVoucher}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AllProduct"
          component={AllProduct}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="PrivacyPolicy"
          component={PrivacyPolicy}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="CouponAndDealCart"
          component={CouponAndDealCart}
        />
      </Stack.Navigator>
    );
  } else {
    return (
      <Stack.Navigator initialRouteName="TabScreen">
        <Stack.Screen
          options={{ headerShown: false }}
          name="TabScreen"
          component={TabScreen}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Notification"
          component={Notification}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Search"
          component={Search}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Deals"
          component={Deals}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ProductDetails"
          component={ProductDetails}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="Login"
          component={Login}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="SignUp"
          component={SignUp}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="CampaignViewPage"
          component={CampaignViewPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="ViewPage"
          component={ViewPage}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AllVoucher"
          component={AllVoucher}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="AllProduct"
          component={AllProduct}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="PrivacyPolicy"
          component={PrivacyPolicy}
        />
        <Stack.Screen
          options={{ headerShown: false }}
          name="CouponAndDealCart"
          component={CouponAndDealCart}
        />
      </Stack.Navigator>
    );
  }
};
export default StackNavigation;
