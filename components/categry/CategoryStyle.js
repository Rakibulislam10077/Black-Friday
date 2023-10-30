import { StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const CategoryStyle = StyleSheet.create({
  categoryItemContainer: {
    height: hp(6.5),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  categoryItemSubcontainer: {
    height: hp(3.5),
  },
  categoryItem: {
    flexDirection: "row",
    marginRight: 20,
  },
  categoryItemText: {
    fontSize: 14,
    color: "#000",
    marginLeft: 10,
  },
});
