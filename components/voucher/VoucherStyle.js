import { StyleSheet } from "react-native";

export const VoucherStyle = StyleSheet.create({
  voucherContainer: {
    height: 90,
    shadowColor: "rgba(0,0,0,0.4)",
    elevation: 14,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    width: "90%",
    alignSelf: "center",
    marginBottom: 100,
  },
  voucherImgCon: {
    width: 60,
    height: 60,
    shadowColor: "rgba(0,0,0,0.4)",
    elevation: 14,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    marginRight: 15,
    borderRadius: 8,
  },
  voucherImg: {
    width: 40,
    height: 40,
  },
  textContainer: {
    flex: 2,
  },
  discountText: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 5,
  },
  exDate: {
    fontSize: 12,
    color: "rgba(0,0,0,0.4)",
  },
  buttonContainer: {
    flex: 1.5,
  },
});
