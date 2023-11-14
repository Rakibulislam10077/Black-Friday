import { View, Text } from "react-native";
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
      <View style={CategoryStyle.categoryItemSubContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categoryData?.map((category) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => {
                  setSelectedCategory(category?.categoryName);
                  setRefreshCoupon((prev) => prev + 1);
                  refreshDeal((prev) => prev + 1);
                  refreshVoucher((prev) => prev + 1);
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

export default HomeCategory;
