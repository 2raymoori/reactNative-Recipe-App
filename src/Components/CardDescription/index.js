import React from "react";
import {Text, View} from "react-native";
import styles from "./styles";

const CardDescription = ({prefix, text}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>{`${prefix} ${text}`}</Text>
        </View>
    )
}
export default React.memo(CardDescription);
