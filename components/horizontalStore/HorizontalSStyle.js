import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export const HorizontalSStyle = StyleSheet.create({
  storeContainer: {
    alignItems: "center",
    flexDirection: "row",
    paddingLeft: 20,
    paddingBottom: 10,
  },
  storeSubContainer: {
    marginRight: 20,
    alignItems: "center",
    width: 60,
    paddingHorizontal: 10,
    justifyContent: "center",
    height: "100%",
  },
  imgContainer: {
    backgroundColor: "#fff",
    padding: 10,
    shadowColor: "rgba(0,0,0,0.6)",
    elevation: 14,
    width: hp(6),
    height: hp(6),
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  storeName: {
    fontSize: 12,
    color: "rgba(0,0,0,0.5)",
  },
});
