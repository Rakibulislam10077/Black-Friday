import { StyleSheet } from "react-native";

export const StoreStyle = StyleSheet.create({
  headerContainer: {
    height: 70,
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    shadowColor: "rgba(0,0,0,0.3)",
    elevation: 14,
  },
  backArrowAndTitleCon: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 10,
  },
  horizontalStoreItemCon: {
    height: 150,
    backgroundColor: "#fff",
    paddingTop: 20,
    width: "100%",
    marginBottom: 10,
  },
  StoreTitle: {
    fontSize: 16,
    color: "rgba(0,0,0,0.5)",
    marginLeft: 20,
    marginBottom: 20,
  },
  storeItemContainer: {
    backgroundColor: "#fff",
    height: 100,
    // // width: 100,
    // alignItems: "center",
    // justifyContent: "center",
    // flexDirection: "row",
  },
});
