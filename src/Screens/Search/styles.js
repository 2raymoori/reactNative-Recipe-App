import {StyleSheet} from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {

        backgroundColor: colors.themeBackgroundColor,
        flex: 1,
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "space-between",
    },
    title: {
        color: colors.white,
        fontSize: 18,
        textAlign: "center",
        fontWeight: "500"
    },
    imgBg: {
        width: "100%", height: "100%", flexDirection: "column",
        // paddingTop:30,
        flex: 1,
        justifyContent: "space-between"
    },
    logo: {
        width: 100,
        height: 100,
        alignSelf: "center",
        marginTop: 30,
        marginBottom: 10
    },
    text: {
        color: colors.white,
        textAlign: "center", margin: 10,
        lineHeight: 40,
        fontSize: 40
    },
    subText: {
        color: colors.white,
        textAlign: "center",
        fontSize: 20

    },
    subContainer: {
        marginBottom: 64
    },
    flatListContainer: {
        flex: 1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",

    }
})
export default styles;
