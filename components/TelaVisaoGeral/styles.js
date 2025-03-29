import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },

  subContainer: {
    backgroundColor: "#FF671F",
    width: "80%",
    borderRadius: 16,
    marginTop: 60,
    padding: 20,
  },

  linha: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },

  texto01Linha: {
    color: "white",
    marginBottom: 20,
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
  },

  texto02Linha: {
    color: "white",
    fontSize: 30,
    fontFamily: "Poppins_500Medium",
  },

  subContainer02: {
    shadowColor: "#000",
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 6,
    marginTop: 20,
    borderRadius: 16,
    width: "80%" ,
    minHeight: 184,
    padding: 20,
    backgroundColor: "#fff",

  },

  texto03SubContainer02: {
    fontSize: 16,
    fontFamily: "Poppins_700Bold"
  },

  box: {
    borderColor: "#F0F0F0",
    borderWidth: 1,
    borderRadius: 16,
    width: 85,
    height: 85,
    alignItems: "center",
    justifyContent: "cneter",
    padding: 5,
  },

  subContainer0201: {
    flexDirection: "row",
    display: "flex",
    gap: 20,
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },

  texto04Box: {
    fontSize: 11,
    color: "#9F9F9F",
    textAlign: "center",
    fontFamily: "Poppins_400Regular",
  },

  texto05Box: {
    textAlign: "center",
    fontFamily: "Poppins_500Medium",
    fontSize: 40,
  },

  subContainer03: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "90%",
    display: "flex",
    gap: 10,
    marginTop: 8,
  },  

  inputSubContainer03: {
    borderColor: "#FF671F",
    borderWidth: 1,
    borderRadius: 16,
    width: "80%",

  },

  btnSubContainer03: {
    backgroundColor: "#FF671F",
    borderRadius: 16,
    height: 46,
    width: 64,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.5 ,
    shadowRadius: 16,
    elevation: 16,
  },

  textoBtn06: {
    color: "white",
    fontSize: 16,
    fontFamily: "Poppins_500Medium",
  },

  btnQrcode: {
    height: 46,
    backgroundColor: "#FA641E",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 16,
    marginTop: 20,
    flexDirection: "row",
    gap: 15,
  },

  qrCodeImg: {
    height: 24,
    width: 24,
  }
});

export default styles;
