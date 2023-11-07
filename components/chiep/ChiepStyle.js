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
    paddingLeft: 15,
  },
  chiepSubContainer: {
    height: hp(8),
    marginTop: 20,
  },
  chiepItem: {
    flexDirection: "row",
    height: 53,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "solid rgba(0, 0, 0, 0.10)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
    marginRight: 10,
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
