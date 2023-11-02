import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DealsStyle } from "./DealsStyle";
import { Divider } from "react-native-paper";
import { DescIcon } from "../../constants/AllSvg";
import { useNavigation } from "@react-navigation/native";

const Deals = () => {
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.navigate("ProductDetails", {})}
          style={DealsStyle.mainContainer}
        >
          <View style={DealsStyle.dealsCartContainer}>
            <View style={DealsStyle.itemImgCon}>
              <Image
                resizeMode="contain"
                style={DealsStyle.itemImg}
                source={require("../../assets/image/black.png")}
              />
            </View>
            <View style={DealsStyle.itemDeailsCon}>
              <Text style={DealsStyle.itemName}>Nike Pink color Shoes</Text>
              <Text style={DealsStyle.exDate}>Expire Date</Text>
              <View style={DealsStyle.allPriceContainer}>
                <Text style={DealsStyle.activePrice}>20$</Text>
                <Text style={DealsStyle.discountedPrice}>27%</Text>
                <Text style={DealsStyle.verticalDivider}>|</Text>
                <Text style={DealsStyle.offPrice}>73%off</Text>
              </View>
              <View style={DealsStyle.BrandingAndLogo}>
                <View style={DealsStyle.brandImgAnaNameCon}>
                  <Image
                    style={DealsStyle.brandImg}
                    source={require("../../assets/image/black.png")}
                  />
                  <Text style={DealsStyle.BrandName}>Nike</Text>
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
          <Divider style={DealsStyle.divider} />
          <View style={DealsStyle.descContainer}>
            <View style={DealsStyle.descIcon}>
              <DescIcon />
            </View>
            <View style={DealsStyle.descCon}>
              <Text style={DealsStyle.desc}>
                dlkfjsd;jfputperoudsmknvk;ldfklasdfj klasdfkjsdfkj lkasdfld asdf
                asldkfal;skdf;lkasdfj
                asdlkfjla;skdjf;laksdjf;lkasdjf;lkasjdfl;aksdjf
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Deals;
