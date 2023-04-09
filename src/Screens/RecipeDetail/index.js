import React from 'react';
import {Image, ScrollView, Text, View} from "react-native";
import styles from './styles'
import ErrorDisplay from "../../Components/Error";

const RecipeDetail = (props) => {
    const nItem = props?.route?.params?.item || {};
    // console.log(item);
    const nutritionKeys = nItem?.nutrition ? Object.keys(nItem?.nutrition) : undefined;
    // console.log(item.nutrition);
    // console.log("######################################################")
    // const renderPrepDescription = () => {
    //     return (
    //         <FlatList data={nItem?.instructions} renderItem={({item, index}) => {
    //             return (
    //                 <View style={styles.instructionContainer}>
    //                     <Text style={{
    //                         textAlign: "center",
    //                         alignSelf: "center",
    //                         flex: 1,
    //                         color: '#707070',
    //                         fontSize: 22,
    //                         fontWeight: 400,
    //                     }}>{index}</Text>
    //                     <Text style={{
    //                         color: "#000000",
    //                         fontSize: 16,
    //                         fontWeight: 400,
    //                         width: 320
    //                     }}>{item?.display_text}</Text>
    //                 </View>
    //             )
    //         }}/>
    //     )
    // }
    const renderPrepDescription = () => {
        return nItem?.instructions?.map((e, i) => {
            return (
                <View key={i} style={styles.instructionContainer}>
                    <Text style={{
                        textAlign: "center",
                        alignSelf: "center",
                        flex: 1,
                        color: '#707070',
                        fontSize: 22,
                        fontWeight: 400,
                    }}>{i + 1}</Text>
                    <Text style={{
                        color: "#000000",
                        fontSize: 16,
                        fontWeight: 400,
                        width: 320
                    }}>{e?.display_text}</Text>
                </View>
            )
        })
    }
    // const renderNutritionList = () => {
    //     return (
    //
    //         <FlatList data={nutritionKeys} renderItem={({item}) => {
    //             if (item !== 'updated_at') {
    //                 return (
    //                     <View style={styles.nutritionContainer}>
    //                         <Text style={styles.textNutName}>{item}</Text>
    //                         <Text style={styles.textNutContent}>{nItem?.nutrition[item]}</Text>
    //                     </View>
    //                 )
    //             }
    //         }
    //         }/>
    //     )
    // }
    const renderNutritionList = () => {
        const nutritionList = nutritionKeys?.map(e => {
            if (e !== 'updated_at') {

                return (
                    <View key={e} style={styles.nutritionContainer}>
                        <Text style={styles.textNutName}>{e}</Text>
                        <Text style={styles.textNutContent}>{nItem?.nutrition[e]}</Text>
                    </View>

                )
            }
        })
        return nutritionList;
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
            <View style={styles.imageContainer}>
                <Image source={{uri: nItem?.thumbnail_url}} style={styles.imageStyle}/>
            </View>
            <Text style={styles.detailTitle}>{nItem?.name || ""}</Text>
            {renderNutritionList()}

            <Text style={styles.instructionHeadingText}>Instructions</Text>
            {nItem?.instructions?.length === undefined ?
                <ErrorDisplay text={`sorry no instructions found for this recipe.`}/> :
                renderPrepDescription()
            }


        </ScrollView>
    )
}
export default React.memo(RecipeDetail);
