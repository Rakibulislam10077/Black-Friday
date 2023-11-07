import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  Alert,
} from "react-native";
import React from "react";
import { ProductDStyle } from "./ProductDetailsStyle";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackArrow, FavouritIcon } from "../../constants/AllSvg";
import { useNavigation } from "@react-navigation/native";
import { Divider } from "react-native-paper";
import { getExpireInAtDays } from "../../utils/formattedDate";

const ProductDetails = (props) => {
  const deal = props?.route?.params;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={[ProductDStyle.iconSection]}>
        <Image
          style={{
            width: "100%",
            height: 300,
            position: "absolute",
            top: 0,
          }}
          source={{ uri: deal?.postPhotoURL }}
        />
        <SafeAreaView>
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
            <TouchableOpacity
              onPress={() => {
                Alert.alert("asfsdfsadf");
              }}
              style={ProductDStyle.favourit}
            >
              <FavouritIcon />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
      <View style={ProductDStyle.bottomSection}>
        <Text style={ProductDStyle.productName}>{deal?.postTitle}</Text>
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
              source={{ uri: deal?.store?.storePhotoURL }}
            />
          </View>
        </View>
        <View style={ProductDStyle.brandAndEx}>
          <View style={ProductDStyle.brandImg}>
            <Image
              style={ProductDStyle.img}
              resizeMode="contain"
              source={{ uri: deal?.brand?.brandPhotoURL }}
            />
          </View>
          <Text style={ProductDStyle.brandName}>{deal?.brand?.brandName}</Text>
          <Text style={[ProductDStyle.dashe, { marginRight: 10 }]}>-</Text>
          <Text style={ProductDStyle.exDate}>
            Expire in{" "}
            <Text style={{ fontWeight: "700" }}>
              {getExpireInAtDays(deal?.expireDate)}
            </Text>{" "}
            days
          </Text>
        </View>
        <Divider style={[ProductDStyle.Divider, { marginTop: 15 }]} />
        <ScrollView>
          <Text style={ProductDStyle.desc}>Description</Text>
          <View style={ProductDStyle.descTCon}>
            <Text>{deal?.postDescription}</Text>
          </View>
        </ScrollView>
        <TouchableOpacity activeOpacity={0.5} style={ProductDStyle.ClimButton}>
          <Text style={ProductDStyle.climText}>Claim</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default ProductDetails;
