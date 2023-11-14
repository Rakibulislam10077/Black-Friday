import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { CategoryStyle } from "./CategoryStyle";
import { Electronics, Fashion, Newest, Tranding } from "../../constants/AllSvg";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Category = ({ categoryData, setSelectedCategory, setRefreshCoupon }) => {
  const navigation = useNavigation();
  const [selectedCategoryColor, setSelectedCategoryColor] = useState(null);

  return (
    <View style={CategoryStyle.categoryItemContainer}>
      <View style={CategoryStyle.categoryItemSubContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categoryData?.map((category) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  setSelectedCategory(category?.categoryName);
                  setRefreshCoupon((prev) => prev + 1);
                  setSelectedCategoryColor(category);
                }}
                key={category?._id}
                style={[
                  CategoryStyle.categoryItem,
                  {
                    backgroundColor:
                      selectedCategoryColor?._id === category?._id
                        ? "#E7F0F2"
                        : "#ffffff",
                  },
                ]}
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
