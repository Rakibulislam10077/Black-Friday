import {
  View,
  Text,
  Image,
  TouchableOpacity,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeStyle } from "./HomeStyle";
import {
  DescIcon,
  Electronics,
  Fashion,
  Magnify,
  Newest,
  NotificationBell,
  Tranding,
} from "../../constants/AllSvg";
import {
  ActivityIndicator,
  Button,
  Divider,
  Menu,
  PaperProvider,
} from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Chiep from "../../components/chiep/Chiep";
import Deals from "../../components/deals/Deals";
import Voucher from "../../components/voucher/Voucher";
import Category from "../../components/categry/Category";
import {
  useAllCategory,
  useAllCoupon,
  useAllStore,
  useCampaign,
} from "../../hooks/AllHooks";
import { getExpireInAtDays } from "../../utils/formattedDate";
import CouponButton from "../../Shared/CouponButton";
import Carousels from "../../components/carousel/Carousels";
import LoadingSpinner from "../../constants/LoadingSpinner";
import ErrorComponent from "../../constants/ErrorComponent";
import ErrorPage from "../../Shared/ErrorPage";
import NetInfo from "@react-native-community/netinfo";
import { DealsStyle } from "../../components/deals/DealsStyle";
import { VoucherStyle } from "../../components/voucher/VoucherStyle";
import DealButton from "../../Shared/dealButton/DealButton";
import { DealbuttonStyle } from "../../Shared/dealButton/DealButtonStyle";
import AsyncStorage from "@react-native-async-storage/async-storage";

export let refetchHomeStore;
export let refetchHomePost;

const Home = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState("");
  const { allStore, storeError, setStoreRefresh } = useAllStore("limit=6");
  const { couponError, setRefreshCoupon } = useAllCoupon("limit=6");
  const [visible, setVisible] = React.useState(false);
  const { allCoupon: couponData } = useAllCoupon(
    `Coupon&limit=6${selectedCategory && `&categoryName=${selectedCategory}`}`
  );
  const { allCoupon: dealData } = useAllCoupon(
    `Deal&limit=6${selectedCategory && `&categoryName=${selectedCategory}`}`
  );
  const { allCoupon: voucherData } = useAllCoupon(
    `Voucher&limit=6${selectedCategory && `&categoryName=${selectedCategory}`}`
  );
  const { categoryData } = useAllCategory();
  const { campaign } = useCampaign();
  const [refreshing, setRefreshing] = React.useState(false); //for refreshing
  const [callRefresh, setCallRefresh] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  refetchHomeStore = setStoreRefresh;
  refetchHomePost = setRefreshCoupon;
  useEffect(() => {
    const error = async () => {
      if (storeError || couponError) {
        setTimeout(() => {
          <LoadingSpinner />;
        }, 2000);
        navigation.navigate("ErrorPage");
      }
    };
    error();
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setStoreRefresh((prev) => prev + 1);
      setRefreshCoupon((prev) => prev + 1);
      setRefreshing(false);
    }, 2000);
  }, []);

  const handelNetWorkFu = () => {
    setCallRefresh(true);
    setTimeout(() => {
      setStoreRefresh((prev) => prev + 1);
      setRefreshCoupon((prev) => prev + 1);
      setRefreshing(false);
      setCallRefresh(false);
    }, 2000);
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsOnline(state.isConnected);
      if (!state.isConnected) {
        setErrorMessage("No network connection.");
      } else {
        setErrorMessage("");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // console.log(selectedCategory);
  // console.log(
  //   "Post",
  //   dealData
  //   // dealData.forEach((d) => d)
  // );

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PaperProvider>
        {/* =========header start here=========== */}
        <View style={HomeStyle.headerContainer}>
          <View>
            <Image source={require("../../assets/image/logo.png")} />
          </View>
          <View style={HomeStyle.MagnifyAndBell}>
            <TouchableOpacity onPress={() => navigation.navigate("Search")}>
              <Magnify />
            </TouchableOpacity>
            <Menu
              visible={visible}
              onDismiss={closeMenu}
              contentStyle={{
                backgroundColor: "gray",
                height: 30,
                justifyContent: "center",
              }}
              anchor={
                <TouchableOpacity onPress={openMenu}>
                  <Text>'{}'</Text>
                </TouchableOpacity>
              }
            >
              <Menu.Item
                contentStyle={{ backgroundColor: "gray" }}
                onPress={() => {
                  setRefreshing(true);
                  closeMenu(true);
                  setTimeout(() => {
                    setStoreRefresh((prev) => prev + 1);
                    setRefreshCoupon((prev) => prev + 1);
                    setRefreshing(false);
                  }, 1000);
                }}
                title="Refresh"
                titleStyle={{ color: "#000" }}
              />
            </Menu>
          </View>
        </View>
        {/* Your other UI components */}
        <View>
          {!isOnline && (
            <View
              style={{
                width: "100%",
                height: 20,
                alignItems: "center",
                backgroundColor: "red",
              }}
            >
              <Text style={{ color: "#fff", fontSize: 12 }}>
                {errorMessage}
              </Text>
            </View>
          )}
        </View>
        {/* =========header end here=========== */}
        <Divider style={HomeStyle.Divider} />
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
          showsVerticalScrollIndicator={false}
        >
          {/* ==========category start here=========*/}
          <Category
            setSelectedCategory={setSelectedCategory}
            categoryData={categoryData}
            setRefreshCoupon={setRefreshCoupon}
          />
          {/* ==========category end here=========*/}
          {/* =============chip item start here============== */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {campaign?.map((cam) => {
              return <Chiep key={cam?._id} cam={cam} />;
            })}
          </ScrollView>
          {/* =============chip item end here============== */}
          {/* =============carousel start here============== */}
          <Carousels />
          {/* =============carousel end here============== */}
          {/* ============Top used product deals start here============== */}
          <View style={HomeStyle.dealSectionContainer}>
            {/* top deals header */}
            <View style={HomeStyle.dealsHeader}>
              <View>
                <Text style={HomeStyle.topDealsTitle}>
                  Top used product deals
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("AllProduct")}
              >
                <Text style={HomeStyle.seeAllText}>See All</Text>
              </TouchableOpacity>
            </View>
            {/* ==================deals Item section start here=================== */}
            <View style={{ marginTop: 20 }}>
              {dealData?.map((deal) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                      navigation.navigate("ProductDetails", { ...deal })
                    }
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
                        <Text style={DealsStyle.itemName}>
                          {deal?.postTitle}
                        </Text>
                        <Text style={DealsStyle.exDate}>
                          Expire in{" "}
                          <Text style={{ fontWeight: "700" }}>
                            {getExpireInAtDays(deal?.expireDate)}
                          </Text>{" "}
                          days
                        </Text>
                        <View style={DealsStyle.allPriceContainer}>
                          <Text style={DealsStyle.activePrice}>
                            20<Text>$</Text>
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
                            <Text style={DealsStyle.BrandName}>
                              {deal?.brand?.brandName}
                            </Text>
                          </View>
                          <View>
                            <Text style={DealsStyle.activityText}>
                              Available on
                            </Text>
                            <Image
                              style={DealsStyle.storeLogo}
                              resizeMode={"contain"}
                              source={{ uri: deal?.store?.storePhotoURL }}
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                    {deal?.postDescription && (
                      <Divider style={DealsStyle.divider} />
                    )}
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
              })}
            </View>
            {/* ==================deals Item section end here=================== */}
          </View>
          {/* ============Top used product deals end here============== */}
          {/* ============== top store start here ========================= */}
          <View style={HomeStyle.topStoreContainer}>
            <View style={HomeStyle.topStoreHeader}>
              <Text style={HomeStyle.topStorTitle}>Top store</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Store")}>
                <Text style={HomeStyle.seeAllText}>See All</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {allStore?.map((store) => {
                return (
                  <TouchableOpacity
                    key={store?._id}
                    onPress={() =>
                      navigation.navigate("ViewPage", { ...store })
                    }
                    style={HomeStyle.topStoreItem}
                  >
                    <View style={HomeStyle.storeImgCon}>
                      <Image
                        style={HomeStyle.topStoreImg}
                        source={{ uri: store?.storePhotoURL }}
                      />
                    </View>
                    <Text numberOfLines={2} style={HomeStyle.storeName}>
                      {store?.storeName}
                    </Text>
                    <Divider style={HomeStyle.storeDivider} />
                    <Text style={HomeStyle.storeOfferText}>
                      <Text>{store?.totalPosts}</Text> offers
                    </Text>
                  </TouchableOpacity>
                );
              })}
            </ScrollView>
          </View>
          {/* ============== top store ends here ========================= */}
          {/* ============Best coupon section start here ================= */}
          <View style={HomeStyle.bestCouponContainer}>
            <View style={HomeStyle.bestCouponHeader}>
              <Text style={HomeStyle.bestCouponTitle}>Best Coupons</Text>
              <TouchableOpacity onPress={() => navigation.navigate("Coupon")}>
                <Text style={HomeStyle.seeAllText}>See All</Text>
              </TouchableOpacity>
            </View>
            {/* ============================ */}
            <View style={HomeStyle.bestCouponCartCon}>
              {couponData?.map((coupon) => {
                return (
                  <TouchableOpacity
                    activeOpacity={0.3}
                    style={HomeStyle.bestCouponCart}
                    key={coupon?._id}
                  >
                    <TouchableOpacity
                      activeOpacity={0.3}
                      onPress={() =>
                        navigation.navigate("ViewPage", { ...coupon })
                      }
                      style={HomeStyle.couponLogoAndTextCon}
                    >
                      <Image
                        style={HomeStyle.couponLogo}
                        source={{ uri: coupon?.store?.storePhotoURL }}
                      />
                      <Text>{coupon?.store?.storeName}</Text>
                    </TouchableOpacity>
                    <View style={HomeStyle.postTitleBox}>
                      <Text style={HomeStyle.postTitle}>
                        {coupon?.postTitle}
                      </Text>
                    </View>
                    <Text style={HomeStyle.exDate}>
                      End in{" "}
                      <Text style={{ fontWeight: "700" }}>
                        {getExpireInAtDays(coupon?.expireDate)}
                      </Text>{" "}
                      days
                    </Text>
                    <View style={HomeStyle.couponBTNCon}>
                      <CouponButton coupon={coupon}>Get Code</CouponButton>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          </View>
          {/* ============Best coupon section ends here ================= */}
          {/* ================popular Voucher section start here================ */}
          <View style={HomeStyle.topStoreContainer}>
            <View style={HomeStyle.topStoreHeader}>
              <Text style={HomeStyle.topStorTitle}>Most popular Voucher</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("AllVoucher")}
              >
                <Text style={HomeStyle.seeAllText}>See All</Text>
              </TouchableOpacity>
            </View>
            {/* ============================ */}
            {/* ================popular Voucher section start here================ */}
            {voucherData?.map((voucher) => {
              return (
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() =>
                    navigation.navigate("CouponAndDealCart", { ...voucher })
                  }
                  key={voucher?._id}
                  style={VoucherStyle.voucherContainer}
                >
                  <View style={VoucherStyle.voucherImgCon}>
                    <Image
                      style={VoucherStyle.voucherImg}
                      source={{ uri: voucher?.store?.storePhotoURL }}
                    />
                  </View>
                  <View style={VoucherStyle.textContainer}>
                    <Text style={VoucherStyle.discountText}>
                      {voucher?.postTitle}
                    </Text>
                    <Text style={VoucherStyle.exDate}>
                      end in{" "}
                      <Text style={{ fontWeight: "700" }}>
                        {getExpireInAtDays(voucher?.expireDate)}{" "}
                      </Text>
                      days
                    </Text>
                  </View>
                  <View style={VoucherStyle.buttonContainer}>
                    <View style={DealbuttonStyle.button}>
                      <Text style={DealbuttonStyle.buttonText}>Buy It</Text>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      </PaperProvider>
    </SafeAreaView>
  );
};

export default Home;
