import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export const HorizontalSStyle = StyleSheet.create({
  storeContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    width: 60,
  },

  imgContainer: {
    backgroundColor: "#fff",
    shadowColor: "rgba(0,0,0,0.6)",
    elevation: 14,
    width: hp(6),
    height: hp(6),
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  storeName: {
    fontSize: 12,
    color: "rgba(0,0,0,0.5)",
    textAlign: "center",
    marginTop: 5,
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
    resizeMode: "contain",
  },
});
