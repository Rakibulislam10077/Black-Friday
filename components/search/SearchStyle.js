import { StyleSheet } from "react-native";

export const SearchStyle = StyleSheet.create({
  searchContainer: {
    backgroundColor: "#fff",
    width: "92%",
    alignSelf: "center",
    borderRadius: 50,
    shadowColor: "rgba(0,0,0,0.4)",
    elevation: 24,
    marginVertical: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 50,
    paddingHorizontal: 10,
  },
  magnify: {
    width: 60,
    justifyContent: "center",
    alignItems: "center",
    opacity: 0.5,
  },
  textInputBox: {
    flex: 4,
  },
  input: {
    fontSize: 16,
    color: "rgba(0,0,0,0.5)",
  },
  searchResultStoreCon: {
    height: 100,
  },
  resultText: {
    marginLeft: 20,
    fontSize: 16,
    color: "rgba(0,0,0,0.5)",
    marginBottom: 10,
  },
  divider: {
    height: 1,
    opacity: 0.1,
    width: "90%",
    alignSelf: "center",
    marginTop: 20,
  },
});
