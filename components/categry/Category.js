import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { CategoryStyle } from "./CategoryStyle";
import { Electronics, Fashion, Newest, Tranding } from "../../constants/AllSvg";
import { useNavigation } from "@react-navigation/native";

const Category = ({ categoryData }) => {
  const navigation = useNavigation();

  const cgImg = [<Tranding />, <Electronics />, <Newest />, <Fashion />];

  return (
    <View style={CategoryStyle.categoryItemContainer}>
      <View style={CategoryStyle.categoryItemSubcontainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {categoryData?.map((category) => {
            return (
              <TouchableOpacity
                style={[CategoryStyle.categoryItem, { marginLeft: 20 }]}
              >
                {/* {cgImg.map((c) => {
                  return c;
                })} */}
                <Text style={CategoryStyle.categoryItemText}>
                  {category.categoryName}
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
