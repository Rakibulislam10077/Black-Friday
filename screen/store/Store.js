import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackArrow2, Magnify } from "../../constants/AllSvg";
import { StoreStyle } from "./StoreStyle";
import { useNavigation } from "@react-navigation/native";
import HorizontalStore from "../../components/horizontalStore/HorizontalStore";
import AllStore from "../../components/allStore/AllStore";
import { useAllStore } from "../../hooks/AllHooks";
import LoadingSpinner from "../../utils/LoadingSpinner";
import ErrorComponent from "../../utils/ErrorComponent";

const Store = () => {
  const navigation = useNavigation();
  const { allStore, storeError, storeDataIsLoading } = useAllStore();
  console.log(allStore?.map((data) => data?.storePhotoURL));
  return (
    <SafeAreaView>
      {/* store header */}
      <View style={StoreStyle.headerContainer}>
        <View style={StoreStyle.backArrowAndTitleCon}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrow2 />
          </TouchableOpacity>
          <Text style={StoreStyle.title}>Store</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Magnify />
        </TouchableOpacity>
      </View>
      {/* store header end */}
      <ScrollView>
        <View style={StoreStyle.horizontalStoreItemCon}>
          <Text style={StoreStyle.StoreTitle}>Top Store</Text>
          {storeDataIsLoading ? (
            <View style={StoreStyle.LoadingSpinner}>
              <LoadingSpinner />
            </View>
          ) : storeError ? (
            <View style={StoreStyle.ErrorComponent}>
              <ErrorComponent />
            </View>
          ) : (
            <View style={StoreStyle.storeItemContainer}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                {allStore?.map((topStore) => {
                  return (
                    <HorizontalStore key={topStore?._id} store={topStore} />
                  );
                })}
              </ScrollView>
            </View>
          )}
        </View>
        {/* ======================= */}
        <View style={StoreStyle.allStoreContainer}>
          <Text>All Store</Text>
          <View style={StoreStyle.storeContainer}>
            {allStore?.map((store) => {
              return <AllStore store={store} />;
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Store;
