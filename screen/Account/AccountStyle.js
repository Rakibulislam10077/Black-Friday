import { StyleSheet } from "react-native";

export const AccountStyle = StyleSheet.create({
  headerContainer: {
    height: 70,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.1)",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    alignItems: "center",
    shadowColor: "rgba(0,0,0,0.3)",
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
  countryBox: {
    width: 40,
    height: 28,
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 1,
    backgroundColor: "rgba(0,0,0,0,3)",
  },
  img: {
    resizeMode: "contain",
    height: 30,
    width: 38,
  },
  boxes: {
    paddingVertical: 20,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  ContactConBoxes: {
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingVertical: 15,
  },
  divider: {
    height: 1,
    opacity: 0.3,
  },
  iconAndText: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    marginLeft: 10,
    fontSize: 18,
    color: "rgba(0,0,0,0.6)",
  },
  subText: {
    fontSize: 14,
    color: "rgba(0,0,0,0.4)",
    marginLeft: 10,
  },
});
