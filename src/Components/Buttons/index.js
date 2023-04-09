import React from "react";
import {TouchableOpacity, Text, Image} from "react-native";
import styles from "./styles";
const Button = (props)=>{
    // console.log(props);
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Text style={styles.text}>{props.children}</Text>
            <Image style={styles.icon} source={require('../../../assets/arrowRight.png')}/>
        </TouchableOpacity>
    )
}
export default React.memo(Button);
