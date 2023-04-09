import React, {memo} from 'react'
import {Text, View} from "react-native";

function ErrorDisplay({text}) {
    return (
        <View>
            <Text
                style={{
                    textTransform: "capitalize",
                    color: "red",
                    fontWeight: 800,
                    fontSize: 20,
                    padding: 20,
                    width: "100%",
                    textAlign: "center"
                }}>{text}</Text>
        </View>
    )
}

export default memo(ErrorDisplay)
