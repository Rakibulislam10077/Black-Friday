import { StyleSheet } from "react-native";

export const LoginStyle = StyleSheet.create({
  loginUserSection: {
    alignItems: "center",
    flex: 1.5,
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    marginVertical: 20,
  },
  subTitle: {
    fontSize: 16,
    color: "rgba(0,0,0,0.5)",
    textAlign: "center",
  },
  inputSection: {
    flex: 2,
  },
  Divider: {
    height: 1,
    opacity: 0.3,
    marginTop: 10,
    marginBottom: 20,
  },
  inputBox: {
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    color: "rgba(0,0,0,0.4)",
    marginBottom: 15,
  },
  input: {
    fontSize: 18,
  },
  forgotText: {
    fontSize: 16,
    color: "rgba(0,0,0,0.9)",
    textAlign: "right",
    marginRight: 20,
  },
  signinButton: {
    height: 50,
    borderRadius: 30,
    backgroundColor: "#0C1B32",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    width: "90%",
    alignSelf: "center",
  },
  loginText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#fff",
  },
  signinPageText: {
    fontSize: 16,
    color: "rgba(0,0,0,0.6)",
    marginTop: 30,
    alignSelf: "center",
  },
  signInpageLinkText: {
    fontWeight: "700",
    color: "rgba(0,0,0,0.6)",
  },
  countrySelectionBox: {
    height: 60,
    borderTopColor: "rgba(0,0,0,0.2)",
    borderTopWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedCountrybox: {
    flexDirection: "row",
    alignItems: "center",
  },
  flagBox: {
    flexDirection: "row",
    alignItems: "center",
  },
  country: {
    marginHorizontal: 10,
  },
  countryPageHeader: {
    height: 70,
    borderBottomColor: "rgba(0,0,0,0.2)",
    borderBottomWidth: 1,
    shadowColor: "rgba(0,0,0,0.2)",
    elevation: 14,
    backgroundColor: "#fff",
    justifyContent: "center",
    paddingLeft: 20,
  },
  arrowAndTextCon: {
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "700",
  },
  countryBoxtInModal: {
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  selectCountryText: {
    fontSize: 16,
    marginBottom: 20,
  },
  flagAndNameBox: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
  },
  flag: {
    marginRight: 10,
  },
  selectedBox: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 50,
    borderBottomColor: "rgba(0,0,0,0.1)",
    borderBottomWidth: 1,
  },
  saveAndContinueBtn: {
    height: 50,
    borderRadius: 30,
    backgroundColor: "#0C1B32",
    width: "90%",
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "500",
    color: "#fff",
  },
});
