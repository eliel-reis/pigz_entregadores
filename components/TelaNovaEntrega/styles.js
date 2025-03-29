import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: "10%"

    },



    subContainer01: {
        borderBottomWidth: 1,
        borderColor: "#707070",
        marginTop: 20,
        flexDirection: "row",
        gap: 20,
        padding: 15,
        justifyContent: "space-between"
    },

    boxSubContainer01: {
  
        alignItems: "center"
    },

    texto01SubContainer01: {
        color: "#707070",
        fontFamily: "Poppins_400Regular",
        fontSize: 14,
    },

    texto02SubContainer02: {
        color: "#FA641F",
        fontFamily: "Poppins_700Bold",
        fontSize: 20,
    },

    subContainer02: {
        alignItems: "center",
        padding: 1,
        marginTop: 20,
    },  

    subContainer04: {
        backgroundColor: "#FA641E",
        borderRadius: 16,
        paddingVertical: 10,
        paddingHorizontal: 21,
        flexDirection: "row",
        alignItems: "center"
    },

    texto01SubContainer04: {
        color: "white",
        fontFamily: "Poppins_500Medium",
        fontSize: 18,
        marginLeft: 20,
    },

    texto02SubContainer04: {
        fontSize: 12,
        fontFamily: "Poppins_400Regular",
        color: "white",
        marginLeft: 20,
    },

    subContainer03: {
        marginTop: 20,
    },

    subContainer05: {
        marginTop: 25,
        paddingLeft: "10%"
    },

    texto01SubContainer05: {
        color: "#FA641F",
        fontSize: 18,
        fontFamily: "Poppins_500Medium",
    },

    texto02SubContainer05: {
        color: "#707070",
        fontFamily: "Poppins_400Regular",

    },


    containerBtn: {
        marginTop: 20,
    },

    btnAceitar: {
        backgroundColor: "#FA641E",
        borderRadius: 16,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 11,
        flexDirection: "row",
        gap: 10,
    },

    texto01BtnAceitar: {
        color: "white",
        fontSize: 16,
        fontFamily: "Poppins_500Medium",
    },

    btnRejeitar: {
        borderWidth: 1,
        borderColor: "#E8453E",
        borderRadius: 16,
        height: 48,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 11,
        marginTop: 20,
        flexDirection: "row",
        gap: 10,
    },

    texto01BtnRejeitar: {
        color: "#E8453E",
        fontSize: 16,
        fontFamily: "Poppins_500Medium",
    },

    barraVertical: {
        backgroundColor: "#FA641E",
        width: 1,
        height: 200,
        position: "absolute",
        left: 10,
        bottom: 173,
        zIndex: -1,

    }
})

export default styles;