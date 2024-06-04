import {
  View,
  Text,
  Image,
  TouchableOpacity,
  RefreshControl,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { HomeStyle } from "./HomeStyle";
import { Magnify } from "../../constants/AllSvg";
import {
  Dialog,
  Divider,
  PaperProvider,
  Portal,
  Provider,
} from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import Chiep from "../../components/chiep/Chiep";
import Category from "../../components/categry/Category";
import {
  useAllCategory,
  useAllCoupon,
  useAllStore,
  useCampaign,
} from "../../hooks/AllHooks";
import Carousels from "../../components/carousel/Carousels";
import LoadingSpinner from "../../constants/LoadingSpinner";
import NetInfo from "@react-native-community/netinfo";
import HomeDeal from "./HomeDeal";
import HomeStore from "./HomeStore";
import HomeCoupon from "./HomeCoupon";
import HomeVoucher from "./HomeVoucher";
import ErrorPage from "../../Shared/ErrorPage";
import HomeCampaign from "./HomeCampaign";
import HomeCategory from "./HomeCategory";

export let refetchHomeStore;
export let refetchHomeCouponData;
export let refetchHomeDealData;
export let refetchHomeVoucherData;

const Home = () => {
  const navigation = useNavigation();
  const [selectedCategory, setSelectedCategory] = useState("");
  const { allStore, storeError, setStoreRefetch } = useAllStore("limit=6");
  const [visible, setVisible] = React.useState(false);
  const [categoryActive, setCategoryActice] = useState(false);
  const {
    allCoupon: couponData,
    couponDataLoading,
    couponError,
    setRefreshCoupon,
  } = useAllCoupon(
    `postType=Coupon&limit=6${
      categoryActive === true && `&categoryName=${selectedCategory}&limit=6`
    }`
  );
  const { allCoupon: dealData, setRefreshCoupon: refreshDeal } = useAllCoupon(
    `postType=Deal&limit=6${
      selectedCategory &&
      categoryActive === true &&
      `&categoryName=${selectedCategory}&limit=6`
    }`
  );
  const { allCoupon: voucherData, setRefreshCoupon: refreshVoucher } =
    useAllCoupon(
      `postType=Voucher&limit=6${
        selectedCategory &&
        categoryActive === true &&
        `&categoryName=${selectedCategory}&limit=6`
      }`
    );
  const { categoryData } = useAllCategory();
  const { campaign } = useCampaign();
  const [refreshing, setRefreshing] = React.useState(false); //for refreshing
  const [isOnline, setIsOnline] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  refetchHomeStore = setStoreRefetch;
  refetchHomeCouponData = setRefreshCoupon;
  refetchHomeDealData = refreshDeal;
  refetchHomeVoucherData = refreshVoucher;

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
      setStoreRefetch((prev) => prev + 1);
      setRefreshCoupon((prev) => prev + 1);
      setRefreshing(false);
    }, 2000);
  }, []);

  useEffect(() => {
    const networkChecker = NetInfo.addEventListener((state) => {
      setIsOnline(state.isConnected);
      if (!state.isConnected) {
        setErrorMessage("No internet connection.");
      } else {
        setErrorMessage("");
      }
    });
    return () => {
      networkChecker();
    };
  }, []);

  const [visibleDialog, setVisibleDialog] = React.useState(false);
  const hideDialog = () => setVisibleDialog(false);

  return (
    <SafeAreaView style={{ flex: 1, paddingBottom: 70 }}>
      {/* =========header start here=========== */}
      <View style={HomeStyle.headerContainer}>
        <View>
          <Image source={require("../../assets/image/logo.png")} />
        </View>
        <View style={HomeStyle.MagnifyAndBell}>
          <TouchableOpacity
            onPress={() => {
              if (!isOnline) {
                setVisibleDialog(true);
              } else {
                navigation.navigate("Search");
              }
            }}
          >
            <Magnify />
          </TouchableOpacity>
        </View>
      </View>
      <Divider style={HomeStyle.Divider} />
      {!isOnline ? (
        <Provider>
          <ErrorPage />
          <Portal>
            <Dialog
              style={{ backgroundColor: "#fff", borderRadius: 10 }}
              visible={visibleDialog}
              onDismiss={hideDialog}
            >
              <Dialog.Content>
                <Text variant="bodyMedium">
                  You are Offline Please connect your internet
                </Text>
              </Dialog.Content>
            </Dialog>
          </Portal>
        </Provider>
      ) : (
        <View>
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
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            showsVerticalScrollIndicator={false}
          >
            {/* ==========category start here=========*/}
            <HomeCategory
              setSelectedCategory={setSelectedCategory}
              categoryData={categoryData}
              setRefreshCoupon={setRefreshCoupon}
              refreshDeal={refreshDeal}
              refreshVoucher={refreshVoucher}
              categoryActive={categoryActive}
              setCategoryActice={setCategoryActice}
            />
            {/* ==========category end here=========*/}
            {/* =============chip item start here============== */}
            <FlatList
              data={campaign}
              contentContainerStyle={{
                backgroundColor: "#fff",
                padding: 20,
                gap: 20,
              }}
              horizontal
              renderItem={({ item }) => {
                return <HomeCampaign cam={item} />;
              }}
              showsHorizontalScrollIndicator={false}
            />
            {/* =============chip item end here============== */}
            {/* =============carousel start here============== */}
            <Carousels />
            {/* =============carousel end here============== */}
            {couponDataLoading ? (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "center",
                  flex: 1,
                  height: 400,
                }}
              >
                <Text>Loading...</Text>
              </View>
            ) : (
              <View>
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
                      return <HomeDeal deal={deal} key={deal?._id} />;
                    })}
                  </View>
                  {/* ==================deals Item section end here=================== */}
                </View>
                {/* ============Top used product deals end here============== */}
                {/* ============== top store start here ========================= */}
                <View style={HomeStyle.topStoreContainer}>
                  <View style={HomeStyle.topStoreHeader}>
                    <Text style={HomeStyle.topStorTitle}>Top store</Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Store")}
                    >
                      <Text style={HomeStyle.seeAllText}>See All</Text>
                    </TouchableOpacity>
                  </View>
                  <FlatList
                    data={allStore}
                    renderItem={({ item }) => {
                      return <HomeStore store={item} />;
                    }}
                    horizontal
                    contentContainerStyle={{ paddingRight: 20 }}
                    showsHorizontalScrollIndicator={false}
                  />
                </View>
                {/* ============== top store ends here ========================= */}
                {/* ============Best coupon section start here ================= */}
                <View style={HomeStyle.bestCouponContainer}>
                  <View style={HomeStyle.bestCouponHeader}>
                    <Text style={HomeStyle.bestCouponTitle}>Best Coupons</Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("Coupon")}
                    >
                      <Text style={HomeStyle.seeAllText}>See All</Text>
                    </TouchableOpacity>
                  </View>
                  {/* ============================ */}
                  <View style={HomeStyle.bestCouponCartCon}>
                    {couponData?.map((coupon) => {
                      return <HomeCoupon coupon={coupon} key={coupon?._id} />;
                    })}
                  </View>
                </View>
                {/* ============Best coupon section ends here ================= */}
                {/* ================popular Voucher section start here================ */}
                <View style={HomeStyle.topStoreContainer}>
                  <View style={HomeStyle.topStoreHeader}>
                    <Text style={HomeStyle.topStorTitle}>
                      Most popular Voucher
                    </Text>
                    <TouchableOpacity
                      onPress={() => navigation.navigate("AllVoucher")}
                    >
                      <Text style={HomeStyle.seeAllText}>See All</Text>
                    </TouchableOpacity>
                  </View>
                  {/* ============================ */}
                  {/* ================popular Voucher section start here================ */}
                  {voucherData?.map((voucher) => {
                    return <HomeVoucher voucher={voucher} key={voucher?._id} />;
                  })}
                </View>
              </View>
            )}
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Home;
