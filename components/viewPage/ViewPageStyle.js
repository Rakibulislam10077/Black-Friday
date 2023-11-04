import { StyleSheet } from "react-native";

export const ViewPageStyle = StyleSheet.create({
  TabNavigateContainer: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: 18,
    paddingHorizontal: 10,
    borderColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
  },
  storeBranding: {
    flexDirection: "row",
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 20,
  },
  storeImgCon: {
    height: 90,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "rgba(0,0,0,0.7)",
    elevation: 15,
    flex: 2,
    width: 90,
  },
  SN_And_Rn_Con: {
    flex: 4,
    paddingLeft: 20,
  },
  storeBrandName: {
    fontSize: 18,
    fontWeight: "900",
  },
  ST_and_FV: {
    flex: 2,
    alignItems: "center",
  },
  startCon: {
    borderWidth: 1,
    borderRadius: 50,
    padding: 6,
    borderColor: "rgba(0,0,0,0.2)",
    marginBottom: 10,
  },
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
  },

  bottomBtnForVisit: {
    width: "90%",
    height: 60,
    alignSelf: "center",
    shadowColor: "#000",
    elevation: 15,
    borderRadius: 40,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 15,
  },
  imgAndTextCon: {
    flexDirection: "row",
    alignItems: "center",
  },
  btmBtnImg: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  bttmBtnText: {
    fontSize: 16,
    color: "#000",
  },
  visitBtn: {
    backgroundColor: "#D65A00",
    width: 100,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  visitBtnText: {
    fontSize: 16,
    color: "#fff",
  },
});
