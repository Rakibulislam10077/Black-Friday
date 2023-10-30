import { StyleSheet } from "react-native";

export const AllProductStyle = StyleSheet.create({
  headerContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    shadowColor: "rgba(0,0,0,0.3)",
    elevation: 14,
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
    marginBottom: 10,
    height: 70,
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
});
