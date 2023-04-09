import React from "react";
import {Image, View} from "react-native";
import styles from "./styles";

const AuthorImage = ({imgSrc}) => {
    return (
        <View style={styles.container}>
            {imgSrc === undefined ?

                (
                    <View
                        style={styles.profileImg}>


                    </View>
                ) :
                (

                    <Image style={styles.profileImg} source={{uri: imgSrc}}/>
                )
            }
        </View>
    )
}
export default React.memo(AuthorImage);
