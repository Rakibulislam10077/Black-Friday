import { View, Text, TouchableOpacity, FlatList } from "react-native";
import React, { useState } from "react";
import { CategoryStyle } from "./CategoryStyle";
import { useNavigation } from "@react-navigation/native";

const Category = ({
  categoryData,
  setSelectedCategory,
  setRefreshCoupon,
  setCategoryActice,
  categoryActive,
}) => {
  const navigation = useNavigation();
  const [selectedCategoryColor, setSelectedCategoryColor] = useState(null);

  return (
    <View style={CategoryStyle.categoryItemContainer}>
      <FlatList
        horizontal
        contentContainerStyle={{
          paddingVertical: 10,
          paddingHorizontal: 20,
          gap: 10,
        }}
        showsHorizontalScrollIndicator={false}
        data={categoryData}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                setSelectedCategory(item?.categoryName);
                setRefreshCoupon((prev) => prev + 1);
                setSelectedCategoryColor(item);
                setCategoryActice(!categoryActive);
              }}
              key={item?._id}
              style={[
                CategoryStyle.categoryItem,
                {
                  backgroundColor:
                    selectedCategoryColor?._id === item?._id && categoryActive
                      ? "#E7F0F2"
                      : "#ffffff",
                },
              ]}
            >
              <Text style={CategoryStyle.categoryItemText}>
                {item?.categoryName}
              </Text>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default Category;
