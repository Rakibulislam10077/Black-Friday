import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const HomeStyle = StyleSheet.create({
  headerContainer: {
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  MagnifyAndBell: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  notificationBell: {
    borderRadius: 30,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.10)",
    //   padding: 10,
    height: hp(5.4),
    width: hp(5.4),
    marginLeft: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  Divider: {
    height: 1,
    opacity: 0.1,
  },

  dealSectionContainer: {
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingBottom: 20,
  },
  dealsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  topDealsTitle: {
    fontSize: 18,
    color: "#000",
  },
  seeAllText: {
    fontSize: 12,
    color: "#283d27",
  },
  topStoreContainer: {
    backgroundColor: "#fff",
    paddingTop: 20,
    marginTop: 20,
    paddingBottom: 20,
  },
  topStoreHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  topStorTitle: {
    fontSize: 18,
    color: "#000",
  },
  topStoreItem: {
    height: 150,
    maxWidth: 180,
    minWidth: 120,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    marginBottom: 10,
    marginLeft: 20,
    padding: 5,
    alignItems: "center",
    // justifyContent: "center",
  },
  storeImgCon: {
    height: 40,
    width: 60,
    backgroundColor: "#fff",
    alignSelf: "center",
    marginTop: 10,
  },
  topStoreImg: {
    // marginTop: 18,
    alignSelf: "center",
    marginBottom: 8,
    width: 40,
    height: 40,
    resizeMode: "stretch",
  },
  storeName: {
    fontSize: 16,
    fontWeight: "700",
    alignSelf: "center",
    marginBottom: 10,
    textAlign: "center",
    marginTop: 8,
  },
  storeDivider: {
    height: 1,
    opacity: 0.1,
    width: "92%",
    alignSelf: "center",
    marginBottom: 10,
  },
  storeOfferText: {
    alignSelf: "center",
    fontSize: 14,
    color: "rgba(0,0,0,0.4)",
  },
  bestCouponContainer: {
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: 20,
  },
  bestCouponHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    alignItems: "center",
  },
  bestCouponTitle: {
    fontSize: 18,
    color: "#000",
  },
  bestCouponCartCon: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: 30,
    flexWrap: "wrap",
  },
  bestCouponCart: {
    width: "48.5%",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,0.5)",
    elevation: 16,
    padding: 8,
    marginBottom: 10,
  },
  couponLogoAndTextCon: {
    backgroundColor: "rgba(154, 134, 121, 0.05)",
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
    height: hp(11),
    borderRadius: 8,
    justifyContent: "center",
  },
  couponLogo: {
    marginBottom: 10,
    height: 40,
    borderRadius: 5,
    resizeMode: "stretch",
    width: 50,
  },
  postTitleBox: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 5,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
  },
  exDate: {
    fontSize: 12,
    color: "rgba(0,0,0,0.4)",
    alignSelf: "center",
  },
  couponBTNCon: {
    width: "90%",
    alignSelf: "center",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
});
