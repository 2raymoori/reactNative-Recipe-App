import {Dimensions, StyleSheet} from "react-native";

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
    container: {
        backgroundColor: "#D9D9D9",
        // height: 150,
        marginTop: 80,
        marginRight: 10,
        width: width * 0.4,
        position: "relative",
        borderRadius: 12,
        flexDirection: "column",
        justifyContent: "flex-end",
        padding: 10,
        
    },
    cardTextSection: {
        marginTop: 60,

    },
    title: {
        textAlign: "center",
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: 14,
        lineHeight: 21,
        color: "black",

    },
    cardRow3: {
        marginTop: 19,
    },
    cardMainImage: {
        position: "absolute",
        borderWidth: 1,
        top: -40,
        alignSelf: "center",
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    time: {
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 11,
        lineHeight: 16,

        color: "#A9A9A9"
    },
    timeValue: {
        fontStyle: "normal",
        fontWeight: 600,
        fontSize: 11,
        lineHeight: 16,
        marginTop: 5,
        color: "#484848"
    }
});

export default styles;
