import { View, Text } from "react-native";
import React from "react";
import { CategoryStyle } from "../../components/categry/CategoryStyle";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";

const HomeCategory = ({
  categoryData,
  setSelectedCategory,
  setRefreshCoupon,
  refreshVoucher,
  refreshDeal,
}) => {
  console.log(categoryData);

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
                }}
                key={category?._id}
                style={[CategoryStyle.categoryItem]}
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
