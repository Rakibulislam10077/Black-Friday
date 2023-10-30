import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { BackArrow2, Magnify } from "../../constants/AllSvg";
import { SearchStyle } from "./SearchStyle";
import HorizontalStore from "../horizontalStore/HorizontalStore";
import { Divider } from "react-native-paper";
import StoreDetails from "../storeDetails/StoreDetails";

const Search = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={SearchStyle.searchContainer}>
        <View style={SearchStyle.magnify}>
          <Magnify />
        </View>
        <View style={SearchStyle.textInputBox}>
          <TextInput placeholder="Search" />
        </View>
      </View>
      <Text style={SearchStyle.resultText}>Result</Text>
      <View style={SearchStyle.searchResultStoreCon}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HorizontalStore />
        </ScrollView>
      </View>
      <Divider style={SearchStyle.divider} />
      <View style={{ flex: 1 }}>
        <ScrollView>
          <StoreDetails />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Search;
