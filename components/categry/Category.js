import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { CategoryStyle } from "./CategoryStyle";
import { Electronics, Fashion, Newest, Tranding } from "../../constants/AllSvg";
import { useNavigation } from "@react-navigation/native";

const Category = () => {
  const navigation = useNavigation();
  return (
    <View style={CategoryStyle.categoryItemContainer}>
      <View style={CategoryStyle.categoryItemSubcontainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={[CategoryStyle.categoryItem, { marginLeft: 20 }]}
          >
            <Tranding />
            <Text style={CategoryStyle.categoryItemText}>Trending</Text>
          </TouchableOpacity>
          <TouchableOpacity style={CategoryStyle.categoryItem}>
            <Newest />
            <Text style={CategoryStyle.categoryItemText}>Newest</Text>
          </TouchableOpacity>
          <TouchableOpacity style={CategoryStyle.categoryItem}>
            <Fashion />
            <Text style={CategoryStyle.categoryItemText}>Fashion</Text>
          </TouchableOpacity>
          <TouchableOpacity style={CategoryStyle.categoryItem}>
            <Electronics />
            <Text style={CategoryStyle.categoryItemText}>Electronics</Text>
          </TouchableOpacity>
          <TouchableOpacity style={CategoryStyle.categoryItem}>
            <Electronics />
            <Text style={CategoryStyle.categoryItemText}>Electronics</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default Category;
