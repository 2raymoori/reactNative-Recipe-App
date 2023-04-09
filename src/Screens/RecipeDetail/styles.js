import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 30,
        flex: 1,
    },
    imageStyle: {
        width: "100%",
        height: 200,
        borderRadius: 10,
    },
    instructionContainer: {
        marginBottom: 22,
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    instructionHeadingText: {
        color: "#000000",
        fontWeight: 600,
        fontSize: 22,
        lineHeight: 24,
        marginBottom: 16,
        marginTop: 45,
    },
    imageContainer: {
        backgroundColor: "red",
        borderRadius: 10,
    },
    detailTitle: {
        fontStyle: "normal",
        lineHeight: 24,
        color: "#000000",
        fontWeight: 600,
        textAlign: "center",
        marginTop: 11,
        marginBottom: 24,
    },
    nutritionContainer: {
        marginBottom: 8,
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "#E0E0E0",
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 10,
    },
    textNutName: {
        color: "black",
        fontSize: 18,
    },
    textNutContent: {
        fontStyle: "normal",
        fontWeight: 400,
        fontSize: 18,
        lineHeight: 18,
        /* identical to box height */

        textAlign: "right",

        /* Colour Styles/Neutral Colour/Gray 3 */

        color: "#A9A9A9"
    }
})
export default styles;
