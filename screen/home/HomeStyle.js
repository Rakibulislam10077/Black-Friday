import { StyleSheet } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const HomeStyle = StyleSheet.create({
  headercontainer: {
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    backgroundColor: "#fff",
  },
  MagnifyAndBell: {
    flexDirection: "row",
    alignItems: "center",
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
    opacity: 0.3,
  },
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
  dealSectionContainer: {
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingBottom: 20,
  },
  dealsHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
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
    paddingHorizontal: 20,
    paddingTop: 20,
    marginTop: 20,
    paddingBottom: 20,
  },
  topStoreHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    alignItems: "center",
  },
  topStorTitle: {
    fontSize: 18,
    color: "#000",
  },
  topStoreItem: {
    height: 140,
    width: 100,
    backgroundColor: "#fff",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.4)",
    marginBottom: 10,
  },
  topStoreImg: {
    marginTop: 18,
    alignSelf: "center",
    marginBottom: 8,
  },
  storeName: {
    fontSize: 16,
    fontWeight: "700",
    alignSelf: "center",
    marginBottom: 10,
  },
  storeDivider: {
    height: 1,
    opacity: 0.3,
    width: "92%",
    alignSelf: "center",
    marginBottom: 10,
  },
  storeOfferText: {
    alignSelf: "center",
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
  },
  bestCouponCart: {
    width: "48%",
    height: 220,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,0.5)",
    elevation: 16,
    padding: 8,
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
  },
});
