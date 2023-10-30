import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { BackArrow2, Magnify } from "../../constants/AllSvg";
import { AllProductStyle } from "./AllProductStyle";
import { useNavigation } from "@react-navigation/native";
import Deals from "../deals/Deals";

const AllProduct = () => {
  const navigation = useNavigation();
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
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <ScrollView>
          <Deals />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
export default AllProduct;
