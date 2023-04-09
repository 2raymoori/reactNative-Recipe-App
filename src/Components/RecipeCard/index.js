import React from "react";
import {Image, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import RecipeTitle from "../RecipeCardTitle";
import AuthorImage from "../LogoImage";
import CardDescription from "../CardDescription";
import Rating from "../Rating";

const RecipeCard = (props) => {
    const ReceipDetail = props.ReceipDetail;
    return (
        <TouchableOpacity onPress={() => {
            props.navigation.navigate("RecipeDetail", {item: ReceipDetail})
        }} style={styles.container}>
            <Image source={{uri: ReceipDetail.thumbnail_url}} style={styles.cardMainImage}/>
            <View style={styles.row1}>
                <RecipeTitle title={ReceipDetail?.name}/>
            </View>
            <Rating rating={ReceipDetail?.user_ratings?.score}/>
            <View style={styles.row2}>
                <View style={styles.row2Col1}>
                    <AuthorImage imgSrc={ReceipDetail?.credits[0]?.image_url}/>
                    <CardDescription prefix="By"
                                     text={ReceipDetail.credits?.length ? ReceipDetail.credits[0]?.name : null}/>
                </View>
                {ReceipDetail?.cook_time_minutes ? (<View style={styles.row2Col2}>
                    <Image source={require("../../../assets/timer.png")} style={{width: 20, height: 20}}/>
                    <CardDescription prefix="" text={ReceipDetail?.cook_time_minutes || "N/A"}/>
                </View>) : (<View>
                </View>)}
            </View>
        </TouchableOpacity>
    )

}
export default React.memo(RecipeCard);

/*

   <Card
                            style={index === 0 ? { marginLeft: 24 } : {}}
                            title="Steak with tomato sauce and bulgur rice."
                            time="20 mins"
                            author={{
                                name: 'James Milner',
                                image: 'https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg'
                            }}
                        />
 */
