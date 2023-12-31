import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export const ProductDStyle = StyleSheet.create({
  iconSection: {
    width: "100%",
    height: 300,
  },

  backAndFavCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 30,
  },
  backIcon: {
    width: 43,
    height: 43,
    backgroundColor: "#fff",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.4)",
  },
  favourit: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: "rgba(0,0,0,0.4)",
    width: 43,
    height: 43,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    // position: "absolute",
    // right: 20,
    // top: 40,
  },
  bottomSection: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: -30,
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  productName: {
    fontSize: 20,
    fontWeight: "700",
  },
  discountTextBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  discountAllText: { flexDirection: "row", alignItems: "center" },
  ActivePriceAndlessPrice: {
    flexDirection: "row",
    alignItems: "center",
  },
  activePrice: {
    fontSize: 26,
    fontWeight: "700",
    marginRight: 10,
  },
  dashe: {
    color: "rgba(0,0,0,0.4)",
    fontSize: 24,
  },
  Divider: {
    height: 1,
    opacity: 0.1,
  },
  lessPrice: {
    fontSize: 14,
    color: "rgba(255, 0, 0, 0.6)",
    marginLeft: 10,
    textDecorationLine: "line-through",
  },
  offText: {
    fontSize: 18,
    color: "rgba(0,0,0,0.7)",
    marginLeft: 10,
  },
  activeText: {
    fontSize: 8,
  },
  storeLogo: {
    width: 40,
    height: 20,
    marginTop: 8,
    borderRadius: 4,
    resizeMode: "contain",
  },
  brandAndEx: {
    flexDirection: "row",
    alignItems: "center",
  },
  brandImg: {
    borderRadius: 4,
    width: hp(4),
    height: hp(4),
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
    marginRight: 10,
  },
  img: {
    width: "98%",
    height: "90%",
  },
  brandName: {
    fontSize: 14,
    marginRight: 10,
    color: "rgba(0,0,0,0.6)",
  },
  exDate: {
    color: "rgba(0,0,0,0.5)",
    fontSize: 14,
  },
  desc: {
    fontSize: 18,
    marginTop: 20,
    fontWeight: "600",
    marginBottom: 10,
  },
  descTCon: {
    paddingBottom: 50,
    paddingHorizontal: 5,
  },
  ClaimButton: {
    width: "98%",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0C1B32",
    height: 50,
    // position: "absolute",
    // bottom: 10,
    alignSelf: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  claimText: {
    fontSize: 18,
    color: "#fff",
  },
});
