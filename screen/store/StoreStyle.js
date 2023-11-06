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
    height: 180,
    backgroundColor: "#fff",
    paddingTop: 20,
    width: "100%",
  },
  StoreTitle: {
    fontSize: 16,
    color: "rgba(0,0,0,0.5)",
    marginLeft: 20,
    marginBottom: 10,
  },
  storeItemContainer: {
    backgroundColor: "#fff",
    height: 130,
    // alignItems: "center",
    // justifyContent: "center",
    width: "100%",
  },
  allStoreContainer: {
    marginTop: 10,
    backgroundColor: "#fff",
    paddingTop: 20,
    paddingHorizontal: 20,
    flex: 1,
    paddingBottom: 100,
  },
  allStoreText: {
    fontSize: 16,
    color: "rgba(0,0,0,0.5)",
    marginBottom: 10,
  },
  storeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
  },
  LoadingSpinner: {
    height: 100,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  ErrorComponent: {
    height: 100,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
});
