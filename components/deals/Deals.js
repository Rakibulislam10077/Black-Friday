import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DealsStyle } from "./DealsStyle";
import { Divider } from "react-native-paper";
import { DescIcon } from "../../constants/AllSvg";
import { useNavigation } from "@react-navigation/native";
import { getExpireInAtDays } from "../../utils/formattedDate";
import { useAllCoupon, useQueryCoupon } from "../../hooks/AllHooks";
import LoadingSpinner from "../../constants/LoadingSpinner";

const Deals = ({ storeName, postType }) => {
  const [deals, setDeals] = useState();
  const navigation = useNavigation();
  const { couponData, isLoading } = useQueryCoupon(storeName, postType);
  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <ScrollView>
          {couponData?.map((deal) => {
            return (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() =>
                  navigation.navigate("ProductDetails", { ...deal })
                }
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
                  <View style={DealsStyle.itemDeailsCon}>
                    <Text style={DealsStyle.itemName}>{deal?.postTitle}</Text>
                    <Text style={DealsStyle.exDate}>
                      Expire in{" "}
                      <Text style={{ fontWeight: "700" }}>
                        {getExpireInAtDays(deal?.expireDate)}
                      </Text>{" "}
                      days
                    </Text>
                    <View style={DealsStyle.allPriceContainer}>
                      <Text style={DealsStyle.activePrice}>20$</Text>
                      <Text style={DealsStyle.discountedPrice}>27%</Text>
                      <Text style={DealsStyle.verticalDivider}>|</Text>
                      <Text style={DealsStyle.offPrice}>73%off</Text>
                    </View>
                    <View style={DealsStyle.BrandingAndLogo}>
                      <View style={DealsStyle.brandImgAnaNameCon}>
                        <View style={DealsStyle.imgCon}>
                          <Image
                            style={DealsStyle.brandImg}
                            source={{ uri: deal?.brand?.brandPhotoURL }}
                          />
                        </View>
                        <Text style={DealsStyle.BrandName}>
                          {deal?.brand?.brandName}
                        </Text>
                      </View>
                      <View>
                        <Text style={DealsStyle.activityText}>test</Text>
                        <Image
                          style={DealsStyle.storeLogo}
                          source={require("../../assets/image/amazon.png")}
                        />
                      </View>
                    </View>
                  </View>
                </View>
                {<Divider style={DealsStyle.divider} />}
                <View style={DealsStyle.descContainer}>
                  <View style={DealsStyle.descIcon}>
                    <DescIcon />
                  </View>
                  <View style={DealsStyle.descCon}>
                    <Text style={DealsStyle.desc}>{deal?.postDescription}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

export default Deals;
