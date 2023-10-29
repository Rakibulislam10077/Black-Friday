import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import React from "react";
import { ProductDStyle } from "./ProductDetailsStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackArrow, FavouritIcon } from "../../constants/AllSvg";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "react-native-paper";

const ProductDetails = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        resizeMode="contain"
        source={require("../../assets/image/amazon.png")}
        style={ProductDStyle.imgSection}
      >
        <View style={ProductDStyle.backAndFavCon}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={ProductDStyle.backIconCon}
          >
            <View style={ProductDStyle.backIcon}>
              <BackArrow />
            </View>
            <Text style={ProductDStyle.backText}>Back</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ProductDStyle.favourit}>
            <FavouritIcon />
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View style={ProductDStyle.bottomSection}>
        <Text style={ProductDStyle.productName}>Nike Pink color Shoes</Text>
        <View style={ProductDStyle.discountTextBox}>
          <View style={ProductDStyle.discountAllText}>
            <View style={ProductDStyle.ActivePriceAndlessPrice}>
              <Text style={ProductDStyle.activePrice}>200$</Text>
              <Text style={ProductDStyle.dashe}>-</Text>
              <Text style={ProductDStyle.lessPrice}>70%</Text>
            </View>
            <Text style={ProductDStyle.offText}>50%off</Text>
          </View>
          <View>
            <Text style={ProductDStyle.activeText}>Available On</Text>
            <Image
              style={ProductDStyle.storeLogo}
              source={require("../../assets/image/amazon.png")}
            />
          </View>
        </View>
        <View style={ProductDStyle.brandAndEx}>
          <View style={ProductDStyle.brandImg}>
            <Image
              style={ProductDStyle.img}
              resizeMode="contain"
              source={require("../../assets/image/noon.png")}
            />
          </View>
          <Text style={ProductDStyle.brandName}>Nike</Text>
          <Text style={[ProductDStyle.dashe, { marginRight: 10 }]}>-</Text>
          <Text>
            Expire in <Text>14</Text> days
          </Text>
        </View>
        <Divider style={[ProductDStyle.Divider, { marginTop: 15 }]} />
        <Text style={ProductDStyle.desc}>Description</Text>
        <ScrollView>
          <View style={ProductDStyle.descTCon}>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Text>
          </View>
        </ScrollView>
        <TouchableOpacity activeOpacity={0.5} style={ProductDStyle.ClimButton}>
          <Text style={ProductDStyle.climText}>Clim</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
