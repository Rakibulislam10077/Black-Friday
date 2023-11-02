import { Dimensions, StyleSheet } from "react-native";
export const StoreDetailsStyle = StyleSheet.create({
  storeDetailsCard: {
    // flex: 1,
    backgroundColor: "#fff",
    width: "90%",
    shadowColor: "rgba(0,0,0,0.6)",
    elevation: 15,
    marginBottom: 10,
    alignSelf: "center",
    borderRadius: 10,
    padding: 20,
    position: "relative",
    backgroundColor: "#fff",
    marginTop: 10,
    // height: 180,
  },
  imgCon: {
    shadowColor: "rgba(0,0,0,0.5)",
    elevation: 15,
    width: 60,
    height: 60,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    marginRight: "8%",
  },
  couponBtnImgTextCon: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  cartImg: {
    width: "70%",
    height: "70%",
  },
  postTitleAndDateCon: {
    flex: 2,
  },
  postTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  exDate: {
    fontSize: 13,
    color: "rgba(0,0,0,0.5)",
  },
  divider: {
    height: 1,
    color: "#000",
    opacity: 0.3,
    marginTop: 15,
  },
  verifiedCon: {
    flexDirection: "row",
    marginTop: 15,
    alignItems: "center",
    width: "100%",
    backgroundColor: "#fff",
  },
  verifyIcon: {
    marginRight: 10,
    // flex: 0.3,
  },
  verifyText: {
    color: "#000",
    opacity: 0.7,
    fontSize: 12,
  },
});
