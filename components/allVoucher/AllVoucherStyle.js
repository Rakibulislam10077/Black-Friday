import { StyleSheet } from "react-native";

export const AllVoucherStyle = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    height: 70,
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
    shadowColor: "rgba(0,0,0,0.4)",
    elevation: 14,
  },
  backArrowAndTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 10,
  },
  itemContainer: {
    backgroundColor: "#fff",
    flex: 1,
  },
});
