import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import StactNavigation from "../navigation/Navigation";

const Index = () => {
  return (
    <NavigationContainer>
      <StactNavigation />
    </NavigationContainer>
  );
};
export default Index;
