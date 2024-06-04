import { StyleSheet } from "react-native";

export const AllStoreStyle = StyleSheet.create({
  storeContainer: {
    width: "48.5%",
    backgroundColor: "#fff",
    borderRadius: 12,
    shadowColor: "rgba(0,0,0,0.4)",
    elevation: 14,
    padding: 15,
    marginTop: 10,
  },
  imgContainer: {
    width: "90%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  img: {
    width: "50%",
    height: 60,
    resizeMode: "contain",
  },
  storeName: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
    alignSelf: "center",
    textAlign: "center",
  },
  divider: {
    height: 1,
    opacity: 0.1,
    width: "98%",
    alignSelf: "center",
    marginBottom: 10,
  },
  offerText: {
    fontSize: 14,
    color: "rgba(0,0,0,0.5)",
    alignSelf: "center",
  },
  offerNumber: {
    fontSize: 14,
    color: "rgba(0,0,0,0.5)",
    fontWeight: "600",
  },
});
