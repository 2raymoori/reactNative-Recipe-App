import {Dimensions, StyleSheet} from "react-native";

const width = Dimensions.get("window").width;
const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
    },
    star: {
        width: 22,
        height: 22,
        margin: 2
    }
});

export default styles;
