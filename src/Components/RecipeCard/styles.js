import {Dimensions, StyleSheet} from "react-native";

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container: {
        position: "relative",
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "white",
        width: width * 0.8,//300,
        height: 135,
        marginTop: 70,
        borderRadius: 10,
        marginRight: 20,
        padding: 10,
        marginBottom: 50,
        //IOSCONFIG
        shadowColor: "#000 ",
        shadowOffset: {
            width: 10,
            height: 3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 6.27,
//ANDROIDCONFIG
        elevation: 15,

    },
    cardMainImage: {
        width: 106,
        height: 106,
        position: "absolute",
        top: -40,
        borderRadius: 50,
        right: 10
    },
    row1: {},
    row2: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    row2Col1: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
    row2Col2: {
        flexDirection: "row",
        alignItems: "center",
        gap: 5,
    },
})
export default styles;
