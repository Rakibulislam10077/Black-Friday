import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackArrow2, Magnify } from "../../constants/AllSvg";
import { StoreStyle } from "./StoreStyle";
import { useNavigation } from "@react-navigation/native";
import HorizontalStore from "../../components/horizontalStore/HorizontalStore";

const Store = () => {
  const navigation = useNavigation();
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
          <View style={StoreStyle.storeItemContainer}>
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              <HorizontalStore />
            </ScrollView>
          </View>
        </View>
        {/* ======================= */}
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Store;
