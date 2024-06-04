import { StyleSheet } from "react-native";

export const CategoryStyle = StyleSheet.create({
  categoryItemContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  categoryItem: {
    backgroundColor: "#fff",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    alignItems: "center",
    justifyContent: "center",
  },
  categoryItemText: {
    fontSize: 14,
    color: "#000",
  },
});
