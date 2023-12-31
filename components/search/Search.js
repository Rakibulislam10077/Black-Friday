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
import { useSearch } from "../../hooks/AllHooks";
import LoadingSpinner from "../../constants/LoadingSpinner";

export let refetchGlobalSearch;

const Search = () => {
  const { searchedData, setRefetch, setSearchKey, isLoading } = useSearch();
  refetchGlobalSearch = setRefetch;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={SearchStyle.searchContainer}>
        <View style={SearchStyle.magnify}>
          <Magnify />
        </View>
        <View style={SearchStyle.textInputBox}>
          <TextInput
            onChangeText={(query) => setSearchKey(query)}
            placeholder="Search"
          />
        </View>
      </View>
      <Text style={SearchStyle.resultText}>Result</Text>
      <View style={SearchStyle.searchResultStoreCon}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {searchedData?.stores?.data.map((store) => {
            return <HorizontalStore key={store?._id} store={store} />;
          })}
        </ScrollView>
      </View>
      <Divider style={SearchStyle.divider} />
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <View style={{ flex: 1 }}>
          <ScrollView>
            {searchedData?.posts?.data?.map((couponData) => {
              return (
                <StoreDetails key={couponData?._id} couponData={couponData} />
              );
            })}
          </ScrollView>
        </View>
      )}
    </SafeAreaView>
  );
};

export default Search;
