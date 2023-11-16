import {
  View,
  Text,
  Image,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import React from "react";
import { DealsStyle } from "../../components/deals/DealsStyle";
import { getExpireInAtDays } from "../../utils/formattedDate";
import { Divider } from "react-native-paper";
import { DescIcon } from "../../constants/AllSvg";
import { useNavigation } from "@react-navigation/native";

const HomeDeal = ({ deal }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("ProductDetails", { ...deal })}
      key={deal?._id}
      style={DealsStyle.mainContainer}
    >
      <View style={DealsStyle.dealsCartContainer}>
        <View style={DealsStyle.itemImgCon}>
          <Image
            resizeMode="contain"
            style={DealsStyle.itemImg}
            source={{ uri: deal?.postPhotoURL }}
          />
        </View>
        <View style={DealsStyle.itemDealsCon}>
          <Text style={DealsStyle.itemName}>{deal?.postTitle}</Text>
          <Text style={DealsStyle.exDate}>
            Expire in{" "}
            <Text style={{ fontWeight: "700" }}>
              {getExpireInAtDays(deal?.expireDate)}
            </Text>{" "}
            days
          </Text>
          <View style={DealsStyle.allPriceContainer}>
            <Text style={DealsStyle.activePrice}>
              20<Text style={{ fontSize: 12 }}>$</Text>
            </Text>
            <Text style={DealsStyle.discountedPrice}>
              27<Text>%</Text>
            </Text>
            <Text style={DealsStyle.verticalDivider}>|</Text>
            <Text style={DealsStyle.offPrice}>
              73<Text>%off</Text>
            </Text>
          </View>
          <View style={DealsStyle.BrandingAndLogo}>
            <View style={DealsStyle.brandImgAnaNameCon}>
              <View style={DealsStyle.imgCon}>
                <Image
                  style={DealsStyle.brandImg}
                  source={{ uri: deal?.brand?.brandPhotoURL }}
                />
              </View>
              <Text style={DealsStyle.BrandName}>{deal?.brand?.brandName}</Text>
              <View>
                <Text style={DealsStyle.activityText}>Available on</Text>
                <Image
                  style={DealsStyle.storeLogo}
                  resizeMode={"contain"}
                  source={{ uri: deal?.store?.storePhotoURL }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      {deal?.postDescription && <Divider style={DealsStyle.divider} />}
      {deal?.postDescription && (
        <View View style={DealsStyle.descContainer}>
          <View style={DealsStyle.descIcon}>
            <DescIcon />
          </View>
          <View style={DealsStyle.descCon}>
            <Text numberOfLines={3} style={DealsStyle.desc}>
              {deal?.postDescription}
            </Text>
          </View>
        </View>
      )}
    </TouchableOpacity>
  );
};

export default HomeDeal;
