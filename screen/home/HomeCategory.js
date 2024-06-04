import { View, Text, FlatList } from "react-native";
import React, { useState } from "react";
import { CategoryStyle } from "../../components/categry/CategoryStyle";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const HomeCategory = ({
  categoryData,
  setSelectedCategory,
  setRefreshCoupon,
  refreshVoucher,
  refreshDeal,
}) => {
  const [selectedCategoryColor, setSelectedCategoryColor] = useState(null);

  return (
    <View style={CategoryStyle.categoryItemContainer}>
      <FlatList
        horizontal
        contentContainerStyle={{
          padding: 10,
          gap: 10,
        }}
        data={categoryData}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => {
                setSelectedCategory(item?.categoryName);
                setRefreshCoupon((prev) => prev + 1);
                refreshDeal((prev) => prev + 1);
                refreshVoucher((prev) => prev + 1);
                setSelectedCategoryColor(item);
              }}
              key={item?._id}
              style={[
                CategoryStyle.categoryItem,
                {
                  backgroundColor:
                    selectedCategoryColor?._id === item?._id
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

export default HomeCategory;
