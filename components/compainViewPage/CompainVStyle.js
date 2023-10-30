import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export const CompainVStyle = StyleSheet.create({
  header: {
    height: 70,
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  backArrowAndTitleCon: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginLeft: 10,
  },
  BellAndMagnifyCon: {
    flexDirection: "row",
    alignItems: "center",
  },
  bellCon: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.10)",
    height: hp(5.4),
    width: hp(5.4),
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  chiepContainer: {
    backgroundColor: "#fff",
  },
  categoryContainer: {
    marginBottom: 10,
  },
});
