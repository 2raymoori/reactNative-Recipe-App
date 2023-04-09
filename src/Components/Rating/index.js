import React from 'react';
import {Image, View} from "react-native";
import styles from "./styles";

const Rating = ({rating}) => {

    const renderStars = () => {
        const arr = [1, 2, 3, 4, 5];
        return arr.map((item, index) => {
            if (Math.round(rating) >= item) {
                return <Image key={index} source={require("../../../assets/star.png")} style={styles.star}/>
            } else {
                return <Image key={index} source={require("../../../assets/starEmpty.png")} style={styles.star}/>
            }
        })
    }
    return (
        <View style={styles.row}>
            {renderStars()}
        </View>
    )
}
export default Rating;
// 5bb62266femsh3015d0d207c3fe6p125406jsn991486cb035c
