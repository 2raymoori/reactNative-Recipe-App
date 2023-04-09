import React from 'react';
import {Image, Text, View} from "react-native";
import styles from "./styles";

const Card = (props) => {

    return (
        <View style={styles.container}>

            <Image source={{uri: props.cardImage}} style={styles.cardMainImage}/>
            <View style={styles.cardTextSection}>
                <Text style={styles.title}>{props.title} {props.id}</Text>
                <View style={styles.cardRow3}>
                    {
                        props.time ? (<View>
                            <Text style={styles.time}>Time</Text>
                            <Text style={styles.timeValue}>{props.time}</Text>
                        </View>) : (<View></View>)
                    }
                    <View style={styles.authorImageContainer}>
                        <Image source={{uri: props.author.image}} style={styles.authorImage}/>
                    </View>
                    <Text style={styles.authorName}>{props.author.name}</Text>
                </View>
            </View>
        </View>
    )
}
export default Card;
