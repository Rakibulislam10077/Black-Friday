import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  Image,
} from "react-native";
import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackArrow2, Magnify } from "../../constants/AllSvg";
import { StoreStyle } from "./StoreStyle";
import { useNavigation } from "@react-navigation/native";
import HorizontalStore from "../../components/horizontalStore/HorizontalStore";
import AllStore from "../../components/allStore/AllStore";
import { useAllStore } from "../../hooks/AllHooks";
import LoadingSpinner from "../../constants/LoadingSpinner";
import ErrorComponent from "../../constants/ErrorComponent";
import ErrorPage from "../../Shared/ErrorPage";
import EmptyData from "../../Shared/EmptyData";
import NetInfo from "@react-native-community/netinfo";

const Store = () => {
  const navigation = useNavigation();
  const { allStore, storeError, storeDataIsLoading, setStoreRefresh } =
    useAllStore();

  const [refreshing, setRefreshing] = React.useState(false);
  const [callRefresh, setCallRefresh] = useState(false);
  const [netIsConnected, setNetIsConnected] = useState(false);
  const [isOnline, setIsOnline] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const handelNetWorkFu = () => {
    setCallRefresh(true);
    setTimeout(() => {
      setRefreshing(false);
      setCallRefresh(false);
      setStoreRefresh((prev) => prev + 1);
    }, 2000);
  };

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      setIsOnline(state.isConnected);
      if (!state.isConnected) {
        setErrorMessage("No internet connection.");
      } else {
        setErrorMessage("");
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* store header */}
      <View style={StoreStyle.headerContainer}>
        <View style={StoreStyle.backArrowAndTitleCon}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackArrow2 />
          </TouchableOpacity>
          <Text style={StoreStyle.title}>Store</Text>
        </View>
        {isOnline && (
          <TouchableOpacity onPress={() => navigation.navigate("Search")}>
            <Magnify />
          </TouchableOpacity>
        )}
      </View>
      {/* store header end */}
      {!isOnline ? (
        // <View style={{ flex: 1, backgroundColor: "red" }}>
        <ErrorPage
          handelNetWorkFu={handelNetWorkFu}
          callRefresh={callRefresh}
          errorMessage={errorMessage}
        />
      ) : (
        // </View>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          <View style={StoreStyle.horizontalStoreItemCon}>
            <Text style={StoreStyle.StoreTitle}>Top Store</Text>
            {storeDataIsLoading ? (
              <LoadingSpinner />
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
          {
            <View style={StoreStyle.allStoreContainer}>
              <Text style={StoreStyle.allStoreText}>All Store</Text>
              <View style={StoreStyle.storeContainer}>
                {allStore?.map((store) => {
                  return <AllStore store={store} key={store?._id} />;
                })}
              </View>
            </View>
          }
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Store;
