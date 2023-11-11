import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DealsStyle } from "./DealsStyle";
import { Divider } from "react-native-paper";
import { DescIcon } from "../../constants/AllSvg";
import { useNavigation } from "@react-navigation/native";
import { getExpireInAtDays } from "../../utils/formattedDate";

const Deals = ({ deal, dealItem, dealsDataFromAllProduct }) => {
  const navigation = useNavigation();
  const postDescription =
    deal?.postDescription ||
    dealItem?.postDescription ||
    dealsDataFromAllProduct?.postDescription;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navigation.navigate("ProductDetails", {
                ...deal,
                ...dealItem,
                ...dealsDataFromAllProduct,
              })
            }
            style={DealsStyle.mainContainer}
          >
            <View style={DealsStyle.dealsCartContainer}>
              <View style={DealsStyle.itemImgCon}>
                <Image
                  resizeMode="contain"
                  style={DealsStyle.itemImg}
                  source={{
                    uri:
                      deal?.postPhotoURL ||
                      dealItem?.postPhotoURL ||
                      dealsDataFromAllProduct?.postPhotoURL,
                  }}
                />
              </View>
              <View style={DealsStyle.itemDealsCon}>
                <Text style={DealsStyle.itemName}>
                  {deal?.postTitle ||
                    dealItem?.postTitle ||
                    dealsDataFromAllProduct?.postTitle}
                </Text>
                <Text style={DealsStyle.exDate}>
                  Expire in{" "}
                  <Text style={{ fontWeight: "700" }}>
                    {getExpireInAtDays(
                      deal?.expireDate ||
                        dealItem?.expireDate ||
                        dealsDataFromAllProduct?.expireDate
                    )}
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
                        source={{
                          uri:
                            deal?.brand?.brandPhotoURL ||
                            dealItem?.brand?.brandPhotoURL ||
                            dealsDataFromAllProduct?.brand?.brandPhotoURL,
                        }}
                      />
                    </View>
                    <Text style={DealsStyle.BrandName}>
                      {deal?.brand?.brandName ||
                        dealItem?.brand?.brandName ||
                        dealsDataFromAllProduct?.brand?.BrandName}
                    </Text>
                  </View>
                  <View>
                    <Text style={DealsStyle.activityText}>test</Text>
                    <Image
                      style={DealsStyle.storeLogo}
                      source={{
                        uri:
                          deal?.store?.storePhotoURL ||
                          dealItem?.store?.storePhotoURL ||
                          dealsDataFromAllProduct?.store?.storePhotoURL,
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
            {postDescription && <Divider style={DealsStyle.divider} />}
            {postDescription && (
              <View style={DealsStyle.descContainer}>
                <View style={DealsStyle.descIcon}>
                  <DescIcon />
                </View>
                <View style={DealsStyle.descCon}>
                  <Text numberOfLines={3} style={DealsStyle.desc}>
                    {deal?.postDescription ||
                      dealItem?.postDescription ||
                      dealsDataFromAllProduct?.postDescription}
                  </Text>
                </View>
              </View>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Deals;
