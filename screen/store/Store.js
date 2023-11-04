import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackArrow2, Magnify } from "../../constants/AllSvg";
import { StoreStyle } from "./StoreStyle";
import { useNavigation } from "@react-navigation/native";
import HorizontalStore from "../../components/horizontalStore/HorizontalStore";
import AllStore from "../../components/allStore/AllStore";
import { useAllStore } from "../../hooks/AllHooks";
import LoadingSpinner from "../../constants/LoadingSpinner";
import ErrorComponent from "../../constants/ErrorComponent";

const Store = () => {
  const navigation = useNavigation();
  const { allStore, storeError, storeDataIsLoading } = useAllStore();

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

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
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <View style={StoreStyle.horizontalStoreItemCon}>
          <Text style={StoreStyle.StoreTitle}>Top Store</Text>
          {storeDataIsLoading ? (
            <LoadingSpinner />
          ) : storeError ? (
            <ErrorComponent />
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
          <Text style={StoreStyle.allStoreText}>All Store</Text>
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
