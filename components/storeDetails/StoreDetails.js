import { Text, TouchableOpacity, View, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { StoreDetailsStyle } from "./StoreDetailsStyle";
import { Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";
import { Rect, ClipPath, Defs, Path, G, Svg } from "react-native-svg";
import { DescIcon, VerifiedIcon } from "../../constants/AllSvg";
import { CouponButton } from "../../Shared/CouponButton";
import { DealButton } from "../../Shared/dealButton/DealButton";

const StoreDetails = () => {
  const navigation = useNavigation();
  return (
    <>
      <View View style={StoreDetailsStyle.storeDetailsCard}>
        <View style={[StoreDetailsStyle.couponBtnImgTextCon]}>
          <View
            style={{ flexDirection: "row", alignItems: "center", flex: 2.7 }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("ViewPage")}
              style={StoreDetailsStyle.imgCon}
            >
              <Image
                style={StoreDetailsStyle.cartImg}
                resizeMode="contain"
                source={{}}
              />
            </TouchableOpacity>
            <View style={StoreDetailsStyle.postTitleAndDateCon}>
              <Text numberOfLines={2} style={StoreDetailsStyle.postTitle}>
                f;askdjfj;aslkdf;lkasdjf;lkasd;flkjas;ldkf;alskdjf;lkasdf;lkasd;flka;sldkfj;alskdjf;lkasdjf
              </Text>
              <Text style={StoreDetailsStyle.exDate}>
                End in <Text style={{ fontWeight: "600" }}>exDate</Text> days
              </Text>
            </View>
          </View>
          <TouchableOpacity style={{ flex: 1.3 }} activeOpacity={0.7}>
            {/* button components */}
            {/* <DealButton /> */}
            {/* <CouponButton /> */}
            {/* )} */}
          </TouchableOpacity>
        </View>
        {/* logical divider for sotered cart item */}
        <Divider style={StoreDetailsStyle.divider} />
        {/* this is verification section */}
        <View style={StoreDetailsStyle.verifiedCon}>
          <View style={StoreDetailsStyle.verifyIcon}>
            <VerifiedIcon />
          </View>
          <Text style={StoreDetailsStyle.verifyText}>Verified offer</Text>
        </View>

        {/* this is description section optional */}

        <View style={[StoreDetailsStyle.verifiedCon, { marginTop: 15 }]}>
          <View style={StoreDetailsStyle.verifyIcon}>
            <DescIcon />
          </View>
          <View style={{ flex: 3 }}>
            <Text>
              sdlfklsdk===================================================fjkasdjfjsdfj;laksdjf;lkasjdf;lkjas;lkdjfl;kajsdflkjasd;lkfj;laskdjfl;kajsdfl;kjas;lkdjf;laksjdf;lkjasd;lfkj;aslkdjf;lkasjdf;lkjasdfl;kjaslkdjflaksjdf===============================================================fj
            </Text>
          </View>
        </View>
      </View>
      <View View style={StoreDetailsStyle.storeDetailsCard}>
        <View style={[StoreDetailsStyle.couponBtnImgTextCon]}>
          <View
            style={{ flexDirection: "row", alignItems: "center", flex: 2.7 }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("ViewPage")}
              style={StoreDetailsStyle.imgCon}
            >
              <Image
                style={StoreDetailsStyle.cartImg}
                resizeMode="contain"
                source={{}}
              />
            </TouchableOpacity>
            <View style={StoreDetailsStyle.postTitleAndDateCon}>
              <Text numberOfLines={2} style={StoreDetailsStyle.postTitle}>
                f;askdjfj;aslkdf;lkasdjf;lkasd;flkjas;ldkf;alskdjf;lkasdf;lkasd;flka;sldkfj;alskdjf;lkasdjf
              </Text>
              <Text style={StoreDetailsStyle.exDate}>
                End in <Text style={{ fontWeight: "600" }}>exDate</Text> days
              </Text>
            </View>
          </View>
          <TouchableOpacity style={{ flex: 1.3 }} activeOpacity={0.7}>
            {/* button components */}
            {/* <DealButton /> */}
            {/* <CouponButton /> */}
            {/* )} */}
          </TouchableOpacity>
        </View>
        {/* logical divider for sotered cart item */}
        <Divider style={StoreDetailsStyle.divider} />
        {/* this is verification section */}
        <View style={StoreDetailsStyle.verifiedCon}>
          <View style={StoreDetailsStyle.verifyIcon}>
            <VerifiedIcon />
          </View>
          <Text style={StoreDetailsStyle.verifyText}>Verified offer</Text>
        </View>

        {/* this is description section optional */}

        <View style={[StoreDetailsStyle.verifiedCon, { marginTop: 15 }]}>
          <View style={StoreDetailsStyle.verifyIcon}>
            <DescIcon />
          </View>
          <View style={{ flex: 3 }}>
            <Text>
              sdlfklsdk===================================================fjkasdjfjsdfj;laksdjf;lkasjdf;lkjas;lkdjfl;kajsdflkjasd;lkfj;laskdjfl;kajsdfl;kjas;lkdjf;laksjdf;lkjasd;lfkj;aslkdjf;lkasjdf;lkjasdfl;kjaslkdjflaksjdf===============================================================fj
            </Text>
          </View>
        </View>
      </View>
      <View View style={StoreDetailsStyle.storeDetailsCard}>
        <View style={[StoreDetailsStyle.couponBtnImgTextCon]}>
          <View
            style={{ flexDirection: "row", alignItems: "center", flex: 2.7 }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("ViewPage")}
              style={StoreDetailsStyle.imgCon}
            >
              <Image
                style={StoreDetailsStyle.cartImg}
                resizeMode="contain"
                source={{}}
              />
            </TouchableOpacity>
            <View style={StoreDetailsStyle.postTitleAndDateCon}>
              <Text numberOfLines={2} style={StoreDetailsStyle.postTitle}>
                f;askdjfj;aslkdf;lkasdjf;lkasd;flkjas;ldkf;alskdjf;lkasdf;lkasd;flka;sldkfj;alskdjf;lkasdjf
              </Text>
              <Text style={StoreDetailsStyle.exDate}>
                End in <Text style={{ fontWeight: "600" }}>exDate</Text> days
              </Text>
            </View>
          </View>
          <TouchableOpacity style={{ flex: 1.3 }} activeOpacity={0.7}>
            {/* button components */}
            {/* <DealButton /> */}
            {/* <CouponButton /> */}
            {/* )} */}
          </TouchableOpacity>
        </View>
        {/* logical divider for sotered cart item */}
        <Divider style={StoreDetailsStyle.divider} />
        {/* this is verification section */}
        <View style={StoreDetailsStyle.verifiedCon}>
          <View style={StoreDetailsStyle.verifyIcon}>
            <VerifiedIcon />
          </View>
          <Text style={StoreDetailsStyle.verifyText}>Verified offer</Text>
        </View>

        {/* this is description section optional */}

        <View style={[StoreDetailsStyle.verifiedCon, { marginTop: 15 }]}>
          <View style={StoreDetailsStyle.verifyIcon}>
            <DescIcon />
          </View>
          <View style={{ flex: 3 }}>
            <Text>
              sdlfklsdk===================================================fjkasdjfjsdfj;laksdjf;lkasjdf;lkjas;lkdjfl;kajsdflkjasd;lkfj;laskdjfl;kajsdfl;kjas;lkdjf;laksjdf;lkjasd;lfkj;aslkdjf;lkasjdf;lkjasdfl;kjaslkdjflaksjdf===============================================================fj
            </Text>
          </View>
        </View>
      </View>
      <View View style={StoreDetailsStyle.storeDetailsCard}>
        <View style={[StoreDetailsStyle.couponBtnImgTextCon]}>
          <View
            style={{ flexDirection: "row", alignItems: "center", flex: 2.7 }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("ViewPage")}
              style={StoreDetailsStyle.imgCon}
            >
              <Image
                style={StoreDetailsStyle.cartImg}
                resizeMode="contain"
                source={{}}
              />
            </TouchableOpacity>
            <View style={StoreDetailsStyle.postTitleAndDateCon}>
              <Text numberOfLines={2} style={StoreDetailsStyle.postTitle}>
                f;askdjfj;aslkdf;lkasdjf;lkasd;flkjas;ldkf;alskdjf;lkasdf;lkasd;flka;sldkfj;alskdjf;lkasdjf
              </Text>
              <Text style={StoreDetailsStyle.exDate}>
                End in <Text style={{ fontWeight: "600" }}>exDate</Text> days
              </Text>
            </View>
          </View>
          <TouchableOpacity style={{ flex: 1.3 }} activeOpacity={0.7}>
            {/* button components */}
            {/* <DealButton /> */}
            {/* <CouponButton /> */}
            {/* )} */}
          </TouchableOpacity>
        </View>
        {/* logical divider for sotered cart item */}
        <Divider style={StoreDetailsStyle.divider} />
        {/* this is verification section */}
        <View style={StoreDetailsStyle.verifiedCon}>
          <View style={StoreDetailsStyle.verifyIcon}>
            <VerifiedIcon />
          </View>
          <Text style={StoreDetailsStyle.verifyText}>Verified offer</Text>
        </View>

        {/* this is description section optional */}

        <View style={[StoreDetailsStyle.verifiedCon, { marginTop: 15 }]}>
          <View style={StoreDetailsStyle.verifyIcon}>
            <DescIcon />
          </View>
          <View style={{ flex: 3 }}>
            <Text>
              sdlfklsdk===================================================fjkasdjfjsdfj;laksdjf;lkasjdf;lkjas;lkdjfl;kajsdflkjasd;lkfj;laskdjfl;kajsdfl;kjas;lkdjf;laksjdf;lkjasd;lfkj;aslkdjf;lkasjdf;lkjasdfl;kjaslkdjflaksjdf===============================================================fj
            </Text>
          </View>
        </View>
      </View>
      <View View style={StoreDetailsStyle.storeDetailsCard}>
        <View style={[StoreDetailsStyle.couponBtnImgTextCon]}>
          <View
            style={{ flexDirection: "row", alignItems: "center", flex: 2.7 }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("ViewPage")}
              style={StoreDetailsStyle.imgCon}
            >
              <Image
                style={StoreDetailsStyle.cartImg}
                resizeMode="contain"
                source={{}}
              />
            </TouchableOpacity>
            <View style={StoreDetailsStyle.postTitleAndDateCon}>
              <Text numberOfLines={2} style={StoreDetailsStyle.postTitle}>
                f;askdjfj;aslkdf;lkasdjf;lkasd;flkjas;ldkf;alskdjf;lkasdf;lkasd;flka;sldkfj;alskdjf;lkasdjf
              </Text>
              <Text style={StoreDetailsStyle.exDate}>
                End in <Text style={{ fontWeight: "600" }}>exDate</Text> days
              </Text>
            </View>
          </View>
          <TouchableOpacity style={{ flex: 1.3 }} activeOpacity={0.7}>
            {/* button components */}
            {/* <DealButton /> */}
            {/* <CouponButton /> */}
            {/* )} */}
          </TouchableOpacity>
        </View>
        {/* logical divider for sotered cart item */}
        <Divider style={StoreDetailsStyle.divider} />
        {/* this is verification section */}
        <View style={StoreDetailsStyle.verifiedCon}>
          <View style={StoreDetailsStyle.verifyIcon}>
            <VerifiedIcon />
          </View>
          <Text style={StoreDetailsStyle.verifyText}>Verified offer</Text>
        </View>

        {/* this is description section optional */}

        <View style={[StoreDetailsStyle.verifiedCon, { marginTop: 15 }]}>
          <View style={StoreDetailsStyle.verifyIcon}>
            <DescIcon />
          </View>
          <View style={{ flex: 3 }}>
            <Text>
              sdlfklsdk===================================================fjkasdjfjsdfj;laksdjf;lkasjdf;lkjas;lkdjfl;kajsdflkjasd;lkfj;laskdjfl;kajsdfl;kjas;lkdjf;laksjdf;lkjasd;lfkj;aslkdjf;lkasjdf;lkjasdfl;kjaslkdjflaksjdf===============================================================fj
            </Text>
          </View>
        </View>
      </View>
      <View View style={StoreDetailsStyle.storeDetailsCard}>
        <View style={[StoreDetailsStyle.couponBtnImgTextCon]}>
          <View
            style={{ flexDirection: "row", alignItems: "center", flex: 2.7 }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("ViewPage")}
              style={StoreDetailsStyle.imgCon}
            >
              <Image
                style={StoreDetailsStyle.cartImg}
                resizeMode="contain"
                source={{}}
              />
            </TouchableOpacity>
            <View style={StoreDetailsStyle.postTitleAndDateCon}>
              <Text numberOfLines={2} style={StoreDetailsStyle.postTitle}>
                f;askdjfj;aslkdf;lkasdjf;lkasd;flkjas;ldkf;alskdjf;lkasdf;lkasd;flka;sldkfj;alskdjf;lkasdjf
              </Text>
              <Text style={StoreDetailsStyle.exDate}>
                End in <Text style={{ fontWeight: "600" }}>exDate</Text> days
              </Text>
            </View>
          </View>
          <TouchableOpacity style={{ flex: 1.3 }} activeOpacity={0.7}>
            {/* button components */}
            {/* <DealButton /> */}
            {/* <CouponButton /> */}
            {/* )} */}
          </TouchableOpacity>
        </View>
        {/* logical divider for sotered cart item */}
        <Divider style={StoreDetailsStyle.divider} />
        {/* this is verification section */}
        <View style={StoreDetailsStyle.verifiedCon}>
          <View style={StoreDetailsStyle.verifyIcon}>
            <VerifiedIcon />
          </View>
          <Text style={StoreDetailsStyle.verifyText}>Verified offer</Text>
        </View>

        {/* this is description section optional */}

        <View style={[StoreDetailsStyle.verifiedCon, { marginTop: 15 }]}>
          <View style={StoreDetailsStyle.verifyIcon}>
            <DescIcon />
          </View>
          <View style={{ flex: 3 }}>
            <Text>
              sdlfklsdk===================================================fjkasdjfjsdfj;laksdjf;lkasjdf;lkjas;lkdjfl;kajsdflkjasd;lkfj;laskdjfl;kajsdfl;kjas;lkdjf;laksjdf;lkjasd;lfkj;aslkdjf;lkasjdf;lkjasdfl;kjaslkdjflaksjdf===============================================================fj
            </Text>
          </View>
        </View>
      </View>
      <View View style={StoreDetailsStyle.storeDetailsCard}>
        <View style={[StoreDetailsStyle.couponBtnImgTextCon]}>
          <View
            style={{ flexDirection: "row", alignItems: "center", flex: 2.7 }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("ViewPage")}
              style={StoreDetailsStyle.imgCon}
            >
              <Image
                style={StoreDetailsStyle.cartImg}
                resizeMode="contain"
                source={{}}
              />
            </TouchableOpacity>
            <View style={StoreDetailsStyle.postTitleAndDateCon}>
              <Text numberOfLines={2} style={StoreDetailsStyle.postTitle}>
                f;askdjfj;aslkdf;lkasdjf;lkasd;flkjas;ldkf;alskdjf;lkasdf;lkasd;flka;sldkfj;alskdjf;lkasdjf
              </Text>
              <Text style={StoreDetailsStyle.exDate}>
                End in <Text style={{ fontWeight: "600" }}>exDate</Text> days
              </Text>
            </View>
          </View>
          <TouchableOpacity style={{ flex: 1.3 }} activeOpacity={0.7}>
            {/* button components */}
            {/* <DealButton /> */}
            {/* <CouponButton /> */}
            {/* )} */}
          </TouchableOpacity>
        </View>
        {/* logical divider for sotered cart item */}
        <Divider style={StoreDetailsStyle.divider} />
        {/* this is verification section */}
        <View style={StoreDetailsStyle.verifiedCon}>
          <View style={StoreDetailsStyle.verifyIcon}>
            <VerifiedIcon />
          </View>
          <Text style={StoreDetailsStyle.verifyText}>Verified offer</Text>
        </View>

        {/* this is description section optional */}

        <View style={[StoreDetailsStyle.verifiedCon, { marginTop: 15 }]}>
          <View style={StoreDetailsStyle.verifyIcon}>
            <DescIcon />
          </View>
          <View style={{ flex: 3 }}>
            <Text>
              sdlfklsdk===================================================fjkasdjfjsdfj;laksdjf;lkasjdf;lkjas;lkdjfl;kajsdflkjasd;lkfj;laskdjfl;kajsdfl;kjas;lkdjf;laksjdf;lkjasd;lfkj;aslkdjf;lkasjdf;lkjasdfl;kjaslkdjflaksjdf===============================================================fj
            </Text>
          </View>
        </View>
      </View>
      <View View style={StoreDetailsStyle.storeDetailsCard}>
        <View style={[StoreDetailsStyle.couponBtnImgTextCon]}>
          <View
            style={{ flexDirection: "row", alignItems: "center", flex: 2.7 }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("ViewPage")}
              style={StoreDetailsStyle.imgCon}
            >
              <Image
                style={StoreDetailsStyle.cartImg}
                resizeMode="contain"
                source={{}}
              />
            </TouchableOpacity>
            <View style={StoreDetailsStyle.postTitleAndDateCon}>
              <Text numberOfLines={2} style={StoreDetailsStyle.postTitle}>
                f;askdjfj;aslkdf;lkasdjf;lkasd;flkjas;ldkf;alskdjf;lkasdf;lkasd;flka;sldkfj;alskdjf;lkasdjf
              </Text>
              <Text style={StoreDetailsStyle.exDate}>
                End in <Text style={{ fontWeight: "600" }}>exDate</Text> days
              </Text>
            </View>
          </View>
          <TouchableOpacity style={{ flex: 1.3 }} activeOpacity={0.7}>
            {/* button components */}
            {/* <DealButton /> */}
            {/* <CouponButton /> */}
            {/* )} */}
          </TouchableOpacity>
        </View>
        {/* logical divider for sotered cart item */}
        <Divider style={StoreDetailsStyle.divider} />
        {/* this is verification section */}
        <View style={StoreDetailsStyle.verifiedCon}>
          <View style={StoreDetailsStyle.verifyIcon}>
            <VerifiedIcon />
          </View>
          <Text style={StoreDetailsStyle.verifyText}>Verified offer</Text>
        </View>

        {/* this is description section optional */}

        <View style={[StoreDetailsStyle.verifiedCon, { marginTop: 15 }]}>
          <View style={StoreDetailsStyle.verifyIcon}>
            <DescIcon />
          </View>
          <View style={{ flex: 3 }}>
            <Text>
              sdlfklsdk===================================================fjkasdjfjsdfj;laksdjf;lkasjdf;lkjas;lkdjfl;kajsdflkjasd;lkfj;laskdjfl;kajsdfl;kjas;lkdjf;laksjdf;lkjasd;lfkj;aslkdjf;lkasjdf;lkjasdfl;kjaslkdjflaksjdf===============================================================fj
            </Text>
          </View>
        </View>
      </View>
      <View View style={StoreDetailsStyle.storeDetailsCard}>
        <View style={[StoreDetailsStyle.couponBtnImgTextCon]}>
          <View
            style={{ flexDirection: "row", alignItems: "center", flex: 2.7 }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("ViewPage")}
              style={StoreDetailsStyle.imgCon}
            >
              <Image
                style={StoreDetailsStyle.cartImg}
                resizeMode="contain"
                source={{}}
              />
            </TouchableOpacity>
            <View style={StoreDetailsStyle.postTitleAndDateCon}>
              <Text numberOfLines={2} style={StoreDetailsStyle.postTitle}>
                f;askdjfj;aslkdf;lkasdjf;lkasd;flkjas;ldkf;alskdjf;lkasdf;lkasd;flka;sldkfj;alskdjf;lkasdjf
              </Text>
              <Text style={StoreDetailsStyle.exDate}>
                End in <Text style={{ fontWeight: "600" }}>exDate</Text> days
              </Text>
            </View>
          </View>
          <TouchableOpacity style={{ flex: 1.3 }} activeOpacity={0.7}>
            {/* button components */}
            {/* <DealButton /> */}
            {/* <CouponButton /> */}
            {/* )} */}
          </TouchableOpacity>
        </View>
        {/* logical divider for sotered cart item */}
        <Divider style={StoreDetailsStyle.divider} />
        {/* this is verification section */}
        <View style={StoreDetailsStyle.verifiedCon}>
          <View style={StoreDetailsStyle.verifyIcon}>
            <VerifiedIcon />
          </View>
          <Text style={StoreDetailsStyle.verifyText}>Verified offer</Text>
        </View>

        {/* this is description section optional */}

        <View style={[StoreDetailsStyle.verifiedCon, { marginTop: 15 }]}>
          <View style={StoreDetailsStyle.verifyIcon}>
            <DescIcon />
          </View>
          <View style={{ flex: 3 }}>
            <Text>
              sdlfklsdk===================================================fjkasdjfjsdfj;laksdjf;lkasjdf;lkjas;lkdjfl;kajsdflkjasd;lkfj;laskdjfl;kajsdfl;kjas;lkdjf;laksjdf;lkjasd;lfkj;aslkdjf;lkasjdf;lkjasdfl;kjaslkdjflaksjdf===============================================================fj
            </Text>
          </View>
        </View>
      </View>
      <View View style={StoreDetailsStyle.storeDetailsCard}>
        <View style={[StoreDetailsStyle.couponBtnImgTextCon]}>
          <View
            style={{ flexDirection: "row", alignItems: "center", flex: 2.7 }}
          >
            <TouchableOpacity
              onPress={() => navigation.navigate("ViewPage")}
              style={StoreDetailsStyle.imgCon}
            >
              <Image
                style={StoreDetailsStyle.cartImg}
                resizeMode="contain"
                source={{}}
              />
            </TouchableOpacity>
            <View style={StoreDetailsStyle.postTitleAndDateCon}>
              <Text numberOfLines={2} style={StoreDetailsStyle.postTitle}>
                f;askdjfj;aslkdf;lkasdjf;lkasd;flkjas;ldkf;alskdjf;lkasdf;lkasd;flka;sldkfj;alskdjf;lkasdjf
              </Text>
              <Text style={StoreDetailsStyle.exDate}>
                End in <Text style={{ fontWeight: "600" }}>exDate</Text> days
              </Text>
            </View>
          </View>
          <TouchableOpacity style={{ flex: 1.3 }} activeOpacity={0.7}>
            {/* button components */}
            {/* <DealButton /> */}
            {/* <CouponButton /> */}
            {/* )} */}
          </TouchableOpacity>
        </View>
        {/* logical divider for sotered cart item */}
        <Divider style={StoreDetailsStyle.divider} />
        {/* this is verification section */}
        <View style={StoreDetailsStyle.verifiedCon}>
          <View style={StoreDetailsStyle.verifyIcon}>
            <VerifiedIcon />
          </View>
          <Text style={StoreDetailsStyle.verifyText}>Verified offer</Text>
        </View>

        {/* this is description section optional */}

        <View style={[StoreDetailsStyle.verifiedCon, { marginTop: 15 }]}>
          <View style={StoreDetailsStyle.verifyIcon}>
            <DescIcon />
          </View>
          <View style={{ flex: 3 }}>
            <Text>
              sdlfklsdk===================================================fjkasdjfjsdfj;laksdjf;lkasjdf;lkjas;lkdjfl;kajsdflkjasd;lkfj;laskdjfl;kajsdfl;kjas;lkdjf;laksjdf;lkjasd;lfkj;aslkdjf;lkasjdf;lkjasdfl;kjaslkdjflaksjdf===============================================================fj
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};

export default StoreDetails;
