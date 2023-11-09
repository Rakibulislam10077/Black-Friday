import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import React from "react";
import { BackArrow2, Magnify } from "../../constants/AllSvg";
import { AllProductStyle } from "./AllProductStyle";
import { useNavigation } from "@react-navigation/native";
import Deals from "../deals/Deals";
import { useAllCoupon } from "../../hooks/AllHooks";
import LoadingSpinner from "../../constants/LoadingSpinner";

const AllProduct = () => {
  const navigation = useNavigation();
  const {
    allCoupon: dealData,
    couponDataLoading,
    setRefreshCoupon,
  } = useAllCoupon("Deal");
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    setTimeout(() => {
      setRefreshCoupon((prev) => prev + 1);
      setRefreshing(false);
    }, 2000);
  }, []);

  console.log(dealData.length);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={AllProductStyle.headerContainer}>
        <View style={AllProductStyle.backArrowAndTitleCon}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrow2 />
          </TouchableOpacity>
          <Text style={AllProductStyle.title}>All Product</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Magnify />
        </TouchableOpacity>
      </View>
      {couponDataLoading ? (
        <LoadingSpinner />
      ) : (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
          <ScrollView
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <View>
              {dealData?.map((dealsDataFromAllProduct) => {
                return (
                  <Deals
                    dealsDataFromAllProduct={dealsDataFromAllProduct}
                    key={dealsDataFromAllProduct?._id}
                  />
                );
              })}
            </View>
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};
export default AllProduct;
