import { StyleSheet } from "react-native";

export const NotifyStyle = StyleSheet.create({
  headerBox: {
    height: 70,
    backgroundColor: "#fff",
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
    shadowColor: "rgba(0,0,0,0.4)",
    elevation: 14,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 20,
  },
  backArrowAndTtile: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    marginLeft: 10,
  },
  notificationBox: {
    height: 60,
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 10,
    backgroundColor: "#FF5454",
  },
  storeLogoAndOfferCon: {
    flexDirection: "row",
    alignItems: "center",
  },
  //   ==========================Modal=====================
  modal: {
    justifyContent: "flex-end",
    margin: 0,
  },
  modalContent: {
    backgroundColor: "#fff",
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    minHeight: 400,
  },
  insideToggleBar: {
    borderRadius: 10,
    height: 5,
    width: 50,
    marginTop: 10,
    alignSelf: "center",
    backgroundColor: "#000",
  },
});
