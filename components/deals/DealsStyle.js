import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
export const DealsStyle = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#fff",
    alignSelf: "center",
    width: " 90%",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,0.3)",
    elevation: 15,
    padding: 10,
  },
  dealsCartContainer: {
    backgroundColor: "#fff",
    marginTop: 15,
    flexDirection: "row",
  },
  itemImgCon: {
    flex: 1,
  },
  itemImg: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  itemDeailsCon: {
    flex: 2,
    marginLeft: 15,
  },
  itemName: {
    fontSize: 18,
    marginBottom: 3,
  },
  exDate: {
    fontSize: 12,
    color: "rgba(0,0,0,0.4)",
    marginBottom: 5,
  },
  allPriceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  activePrice: {
    fontSize: 18,
    color: "rgba(0,0,0,0.8)",
    fontWeight: "700",
    marginRight: 10,
  },
  discountedPrice: {
    fontSize: 12,
    color: "rgba(255, 0, 0, 0.40)",
    marginRight: 10,
    textDecorationLine: "line-through",
  },
  verticalDivider: {
    color: "rgba(0,0,0,0.1)",
    marginRight: 10,
  },
  offPrice: {
    color: "rgba(0,0,0,0.5)",
    fontSize: 12,
  },
  brandImgAnaNameCon: {
    flexDirection: "row",
  },
  BrandingAndLogo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  brandImg: {
    height: 20,
    width: 20,
    marginRight: 8,
  },
  BrandName: {
    fontSize: 14,
    color: "rgba(0,0,0,0.6)",
  },
  activityText: {
    fontSize: 7,
    marginTop: -5,
  },
  storeLogo: {
    marginTop: 5,
  },
  divider: {
    height: 1,
    opacity: 0.3,
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  descContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
  },
  descIcon: {
    marginHorizontal: 10,
  },
  descCon: {
    paddingRight: 10,
  },
  desc: {
    fontSize: 12,
    color: "rgba(0,0,0,0.7)",
  },
});
