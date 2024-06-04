import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export const ChiepStyle = StyleSheet.create({
  chiepItem: {
    flexDirection: "row",
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "solid rgba(0, 0, 0, 0.10)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  chiepItemImage: {
    width: 40,
    height: 40,
    marginRight: 10,
    borderRadius: 50,
  },
  chiepItemText: {
    fontSize: 14,
    color: "#000",
  },
});
