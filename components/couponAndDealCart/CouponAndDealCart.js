import React from "react";
import {
  Clipboard,
  Dimensions,
  Image,
  ImageBackground,
  Linking,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { ClipPath, Defs, G, Path, Rect, Svg } from "react-native-svg";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { VerifiedIcon } from "../../constants/AllSvg";
import { getExpireInAtDays } from "../../utils/formattedDate";

export default function CouponAndDealCart(props) {
  const screenHeight = Dimensions.get("screen").height;
  const navigation = useNavigation();
  const data = props?.route?.params;
  const showToastWithGravity = () => {
    ToastAndroid.showWithGravity(
      `copy your coupon code ${data?.couponCode}`,
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM,
      25,
      50
    );
    Clipboard.setString(data?.couponCode);
  };


  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <ImageBackground
        blurRadius={30}
        style={{
          height: screenHeight,
          justifyContent: "center",
          alignItems: "center",
        }}
        source={require("../../assets/image/modalBG.png")}
      >
        <View style={styles.contentContainer}>
          <View style={{ flex: 3, width: "100%", alignItems: "center" }}>
            <View style={styles.BSimgCon}>
              <Image
                source={{
                  uri: data?.store?.storePhotoURL || data?.postPhotoURL,
                }}
                style={styles.BSimg}
                resizeMode="contain"
              />
            </View>
            <View>
              <Text style={styles.BSstoreN}>{data?.store?.storeName}</Text>
            </View>
            <View>
              <Text style={styles.BSstorePt}>{data?.postTitle}</Text>
            </View>
            <View style={{ width: "80%", alignSelf: "center" }}>
              <Text style={styles.postDescription}>
                {data?.postDescription}
              </Text>
            </View>
            <View style={styles.BScouponCodeCon}>
              <View style={styles.BScouponCodeInCon}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <View style={{ marginRight: 10 }}>
                    {data?.isVerified && <VerifiedIcon />}
                  </View>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "600",
                      alignSelf: "center",
                    }}
                  >
                    {data?.couponCode}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => showToastWithGravity()}>
                  <Svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <G clip-path="url(#clip0_106_2716)">
                      <Path
                        d="M8 10C8 9.46957 8.21071 8.96086 8.58579 8.58579C8.96086 8.21071 9.46957 8 10 8H18C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V18C20 18.5304 19.7893 19.0391 19.4142 19.4142C19.0391 19.7893 18.5304 20 18 20H10C9.46957 20 8.96086 19.7893 8.58579 19.4142C8.21071 19.0391 8 18.5304 8 18V10Z"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <Path
                        d="M16 8V6C16 5.46957 15.7893 4.96086 15.4142 4.58579C15.0391 4.21071 14.5304 4 14 4H6C5.46957 4 4.96086 4.21071 4.58579 4.58579C4.21071 4.96086 4 5.46957 4 6V14C4 14.5304 4.21071 15.0391 4.58579 15.4142C4.96086 15.7893 5.46957 16 6 16H8"
                        stroke="#000000"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </G>
                    <Defs>
                      <ClipPath id="clip0_106_2716">
                        <Rect width="24" height="24" fill="white" />
                      </ClipPath>
                    </Defs>
                  </Svg>
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={{
                color: "rgba(0, 0, 0, 0.40)",
                fontSize: 16,
                marginTop: 10,
              }}
            >
              End in{" "}
              <Text style={{ fontWeight: "700" }}>
                {getExpireInAtDays(data?.expireDate)}
              </Text>{" "}
              days
            </Text>
          </View>
          <View style={{ flex: 1, width: "100%", alignItems: "center" }}>
            <TouchableOpacity
              onPress={() => {
                Linking.openURL(
                  data?.externalLink || data?.store?.storeExternalLink
                );
              }}
              style={{
                backgroundColor: "#283d27",
                width: "80%",
                height: 50,
                borderRadius: 30,
                marginVertical: 20,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ fontSize: 18, color: "#fff", fontWeight: "bold" }}>
                Buy Now!
              </Text>
            </TouchableOpacity>
            {data?.postType === "Coupon" && (
              <Text style={{ color: "rgba(0,0,0,0.6)", textAlign: "center" }}>
                Don’t forget to use your code during checkout!
              </Text>
            )}
          </View>
        </View>
        <View
          style={{
            width: "100%",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              borderRadius: 30,
              borderWidth: 1,
              borderColor: "#fff",
              width: 50,
              height: 50,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(255, 255, 255,0.1)",
            }}
          >
            <Svg
              xmlns="http://www.w3.org/2000/svg"
              class="icon icon-tabler icon-tabler-x"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="white"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <Path d="M18 6l-12 12" />
              <Path d="M6 6l12 12" />
            </Svg>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: "center",
    position: "relative",
    justifyContent: "center",
    // backgroundColor: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    // backgroundColor: "transparent",
    width: "90%",
    alignSelf: "center",
    height: 600,
    borderRadius: 20,
    shadowColor: "rgba(0,0,0,0.4)",
    elevation: 15,
    paddingHorizontal: 20,
  },
  fvCouponCon: {
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.4)",
    padding: 5,
    position: "absolute",
    right: 20,
    top: 50,
  },
  BSimgCon: {
    height: 90,
    width: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,0.4)",
    elevation: 15,
    marginTop: 30,
    marginBottom: 20,
  },
  BSimg: {
    width: 60,
    height: 60,
    borderRadius: 6,
  },
  BSstoreN: {
    fontSize: 16,
    opacity: 0.5,
    marginBottom: 25,
  },
  BSstorePt: {
    marginBottom: 15,
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  postDescription: {
    fontSize: 16,
    textAlign: "center",
    color: "#000",
    opacity: 0.6,
  },
  BScouponCodeCon: {
    width: "75%",
    height: 70,
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 50,
    marginTop: 40,
    justifyContent: "center",
  },
  BScouponCodeInCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 41,
    paddingRight: 30,
    alignItems: "center",
    height: " 70%",
  },
});
