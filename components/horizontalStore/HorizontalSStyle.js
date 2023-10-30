import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export const HorizontalSStyle = StyleSheet.create({
  storeContainer: {
    alignItems: "center",
    marginBottom: 20,
    flexDirection: "row",
    paddingLeft: 20,
  },
  storeSubContainer: {
    marginRight: 20,
    alignItems: "center",
  },
  imgContainer: {
    backgroundColor: "#fff",
    padding: 10,
    marginBottom: 8,
    shadowColor: "rgba(0,0,0,0.6)",
    elevation: 14,
    width: hp(5.5),
    height: hp(5.5),
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  storeName: {
    fontSize: 12,
    color: "rgba(0,0,0,0.5)",
    marginBottom: 10,
  },
});
