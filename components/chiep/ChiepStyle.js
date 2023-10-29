import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export const ChiepStyle = StyleSheet.create({
  chiepContainer: {
    height: hp(10),
    alignItems: "center",
    justifyContent: "center",
  },
  chiepSubContainer: {
    height: hp(8),
    marginTop: 20,
  },
  chiepItem: {
    flexDirection: "row",
    height: hp(6),
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "solid rgba(0, 0, 0, 0.10)",
    alignItems: "center",
    paddingHorizontal: 20,
    marginRight: 10,
  },
  chiepItemImage: {
    width: hp(4.9),
    height: hp(4.9),
    marginRight: 10,
    borderRadius: 50,
  },
  chiepItemText: {
    fontSize: 14,
    color: "#000",
  },
});
