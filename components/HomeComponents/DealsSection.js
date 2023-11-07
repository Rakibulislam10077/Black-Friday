import {
  TouchableOpacity,
  View,
  Image,
  Text,
  Divider,
  DescIcon,
} from "../../constants/Imports";
import { getExpireInAtDays } from "../../utils/formattedDate";
import { DealsStyle } from "../deals/DealsStyle";

const DealsSection = ({ deal }) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("ProductDetails", { ...deal })}
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
        {deal?.postDescription && <Divider style={DealsStyle.divider} />}
        {deal?.postDescription && (
          <View View style={DealsStyle.descContainer}>
            <View style={DealsStyle.descIcon}>
              <DescIcon />
            </View>
            <View style={DealsStyle.descCon}>
              <Text style={DealsStyle.desc}>{deal?.postDescription}</Text>
            </View>
          </View>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default DealsSection;
