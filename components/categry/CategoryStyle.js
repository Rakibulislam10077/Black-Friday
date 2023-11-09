import { StyleSheet } from "react-native";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const CategoryStyle = StyleSheet.create({
  categoryItemContainer: {
    height: 50,
    paddingTop: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  categoryItem: {
    flexDirection: "row",
    backgroundColor: "#fff",
    paddingRight: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    alignItems: "center",
    justifyContent: "center",
    height: 30,
  },
  categoryItemText: {
    fontSize: 14,
    color: "#000",
    marginLeft: 10,
  },
});
