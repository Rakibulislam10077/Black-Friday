import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { DealbuttonStyle } from "./DealButtonStyle";

const DealButton = () => {
  return (
    <TouchableOpacity style={DealbuttonStyle.button}>
      <Text style={DealbuttonStyle.buttonText}>Buy It</Text>
    </TouchableOpacity>
  );
};

export default DealButton;
