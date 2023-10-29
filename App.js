import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Index from "./index/Index";

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Index />
      <StatusBar animated={true} backgroundColor="#000" barStyle="#fff" />
    </View>
  );
}

