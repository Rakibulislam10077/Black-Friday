import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { CategoryStyle } from "./CategoryStyle";
import { Electronics, Fashion, Newest, Tranding } from "../../constants/AllSvg";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Category = ({ categoryData, setSelectedCategory, setRefreshCoupon }) => {
  const navigation = useNavigation();

  return (
    <View style={CategoryStyle.categoryItemContainer}>
      <View style={CategoryStyle.categoryItemSubContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categoryData?.map((category) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setRefreshCoupon((prev) => prev + 1);
                  setSelectedCategory(category?.categoryName);
                }}
                key={category?._id}
                style={[CategoryStyle.categoryItem, { marginLeft: 20 }]}
              >
                {/* {cgImg.map((c) => {
                  return c;
                })} */}
                <Text style={CategoryStyle.categoryItemText}>
                  {category?.categoryName}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default Category;
