import React from "react";
import {FlatList, Pressable, Text, View} from "react-native";
import styles from "./styles";

const CategoryList = ({catList, selectedItem, onChangeSelectedValue}) => {
    return (
        <View style={styles.mainContainer}>
            <FlatList
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                data={catList}
                renderItem={({item}) => {
                    return (
                        <Pressable onPress={() => {
                            console.log(item)
                            onChangeSelectedValue(item);
                        }} style={[styles.container, selectedItem === item ? styles.selectedItem : null]}>
                            <Text
                                style={[styles.text, selectedItem === item ? styles.selectedText : null]}>{item}
                            </Text>
                        </Pressable>
                    )
                }}/>
        </View>
    )
}
export default React.memo(CategoryList);
