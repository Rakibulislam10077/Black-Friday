import { StyleSheet } from "react-native";

export const CouponStyle = StyleSheet.create({
  headerContainer: {
    height: 70,
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
    shadowColor: "rgba(0,0,0,0.3)",
    elevation: 14,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  backArrowAndTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    marginLeft: 10,
    fontSize: 16,
    fontWeight: "700",
  },
  itemBox: {
    backgroundColor: "#fff",
    flex: 1,
  },
  allCouponText: {
    marginVertical: 20,
    marginLeft: 20,
  },
});
