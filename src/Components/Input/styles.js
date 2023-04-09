import {StyleSheet} from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container: {
        borderWidth: 1,
        width: "90%",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        borderRadius: 10,
        gap: 10,
        borderColor: colors.lightGrey,
        padding: 10,
    },
    text: {
        color: colors.white,
        fontSize: 16,
        fontWeight: "500"
    },
    input: {
        color: colors.black,
        borderColor: colors.black,
        borderWidth: 1,
        fontSize: 14,
        flex: 1
    },
    searchIcon: {
        width: 24,
        height: 24,
    },
    flatList: {
        borderWidth: 1,
        width: "100%",

        backgroundColor: "red",
    }

})
export default styles;
