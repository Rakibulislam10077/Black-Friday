import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { ChiepStyle } from "./ChiepStyle";
import { ScrollView } from "react-native-gesture-handler";
import { Image } from "react-native-svg";

const Chiep = () => {
  return (
    <View style={ChiepStyle.chiepContainer}>
      <View style={ChiepStyle.chiepSubContainer}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity style={[ChiepStyle.chiepItem, { marginLeft: 20 }]}>
            <Image
              resizeMode="contain"
              style={ChiepStyle.chiepItemImage}
              source={require("../../assets/image/black.png")}
            />
            <Text style={ChiepStyle.chiepItemText}>Back Friday</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ChiepStyle.chiepItem}>
            <Image
              style={ChiepStyle.chiepItemImage}
              source={require("../../assets/image/black.png")}
            />
            <Text style={ChiepStyle.chiepItemText}>Back Friday</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ChiepStyle.chiepItem}>
            <Image
              style={ChiepStyle.chiepItemImage}
              source={require("../../assets/image/black.png")}
            />
            <Text style={ChiepStyle.chiepItemText}>Back Friday</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ChiepStyle.chiepItem}>
            <Image
              style={ChiepStyle.chiepItemImage}
              source={require("../../assets/image/black.png")}
            />
            <Text style={ChiepStyle.chiepItemText}>Back Friday</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ChiepStyle.chiepItem}>
            <Image
              style={ChiepStyle.chiepItemImage}
              source={require("../../assets/image/black.png")}
            />
            <Text style={ChiepStyle.chiepItemText}>Back Friday</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ChiepStyle.chiepItem}>
            <Image
              style={ChiepStyle.chiepItemImage}
              source={require("../../assets/image/black.png")}
            />
            <Text style={ChiepStyle.chiepItemText}>Back Friday</Text>
          </TouchableOpacity>
          <TouchableOpacity style={ChiepStyle.chiepItem}>
            <Image
              style={ChiepStyle.chiepItemImage}
              source={require("../../assets/image/black.png")}
            />
            <Text style={ChiepStyle.chiepItemText}>Back Friday</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default Chiep;
