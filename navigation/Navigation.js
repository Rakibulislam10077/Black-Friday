import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Account from "../screen/Account/Account";
import Coupon from "../screen/Coupon/Coupon";
import Home from "../screen/home/Home";
import Store from "../screen/store/Store";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  TouchableOpacity,
  View,
  Text,
  Svg,
  G,
  Path,
  Rect,
  Defs,
} from "react-native";
// import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";
import Notification from "../components/notification/Notification";
import Search from "../components/search/Search";
import Deals from "../components/deals/Deals";
import ProductDetails from "../components/productDetails/ProductDetails";
import Login from "../components/login/Login";
import SignUp from "../components/signup/SignUp";
import CompainViewPage from "../components/compainViewPage/CompainViewPage";
import Onboard from "../screen/onboarding/Onboarding";
import ViewPage from "../components/viewPage/ViewPage";
import AllVoucher from "../components/allVoucher/AllVoucher";
import AllProduct from "../components/allProduct/AllProduct";

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
          options={{ headerShown: false }}
          name="Home"
          component={Home}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Store"
          component={Store}
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
                  {/* <Svg
                    width="80"
                    height="80"
                    viewBox="0 0 80 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <Rect
                      x="40"
                      y="0.707107"
                      width="55.5685"
                      height="55.5685"
                      rx="19.5"
                      transform="rotate(45 40 0.707107)"
                      fill="#0DC143"
                      stroke="#F9F8F7"
                    />
                    <G clip-path="url(#clip0_827_4268)">
                      <Path
                        d="M28.75 51.2499L30.8125 46.4999C29.2346 44.26 28.5283 41.5212 28.8263 38.7975C29.1243 36.0739 30.406 33.5526 32.4309 31.7068C34.4558 29.861 37.0847 28.8177 39.8242 28.7725C42.5638 28.7274 45.2256 29.6836 47.3102 31.4616C49.3948 33.2397 50.7589 35.7174 51.1465 38.4297C51.534 41.1421 50.9184 43.9027 49.4151 46.1934C47.9119 48.4841 45.6243 50.1474 42.9817 50.8713C40.3392 51.5951 37.5233 51.3298 35.0625 50.1249L28.75 51.2499Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <Path
                        d="M36.25 37.5C36.25 37.6658 36.3158 37.8247 36.4331 37.9419C36.5503 38.0592 36.7092 38.125 36.875 38.125C37.0408 38.125 37.1997 38.0592 37.3169 37.9419C37.4342 37.8247 37.5 37.6658 37.5 37.5V36.25C37.5 36.0842 37.4342 35.9253 37.3169 35.8081C37.1997 35.6908 37.0408 35.625 36.875 35.625C36.7092 35.625 36.5503 35.6908 36.4331 35.8081C36.3158 35.9253 36.25 36.0842 36.25 36.25V37.5ZM36.25 37.5C36.25 39.1576 36.9085 40.7473 38.0806 41.9194C39.2527 43.0915 40.8424 43.75 42.5 43.75M42.5 43.75H43.75C43.9158 43.75 44.0747 43.6842 44.1919 43.5669C44.3092 43.4497 44.375 43.2908 44.375 43.125C44.375 42.9592 44.3092 42.8003 44.1919 42.6831C44.0747 42.5658 43.9158 42.5 43.75 42.5H42.5C42.3342 42.5 42.1753 42.5658 42.0581 42.6831C41.9408 42.8003 41.875 42.9592 41.875 43.125C41.875 43.2908 41.9408 43.4497 42.0581 43.5669C42.1753 43.6842 42.3342 43.75 42.5 43.75Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </G>
                    <Defs>
                      <ClipPath id="clip0_827_4268">
                        <Rect
                          width="30"
                          height="30"
                          fill="white"
                          transform="translate(25 25)"
                        />
                      </ClipPath>
                    </Defs>
                  </Svg> */}
                </TouchableOpacity>
              );
            },
            headerShown: false,
          }}
        />
        <Tab.Screen
          options={{ headerShown: false }}
          name="Coupon"
          component={Coupon}
        />
        <Tab.Screen name="Account" component={Account} />
      </Tab.Navigator>
    </GestureHandlerRootView>
  );
};

const StackNavigation = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
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
        name="CompainViewPage"
        component={CompainViewPage}
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
    </Stack.Navigator>
  );
};
export default StackNavigation;
