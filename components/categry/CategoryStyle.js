import { StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const CategoryStyle = StyleSheet.create({
  categoryItemContainer: {
    height: 60,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  categoryItemSubcontainer: {
    height: hp(3.5),
  },
  categoryItem: {
    flexDirection: "row",
  },
  categoryItemText: {
    fontSize: 14,
    color: "#000",
    marginLeft: 10,
  },
});
