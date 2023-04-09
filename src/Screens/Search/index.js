import React, {useContext, useEffect, useState} from "react";
import {FlatList, SafeAreaView, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import Input from "../../Components/Input";
import {ReceipyContext} from "../../../App";
import Card from "../../Components/Card";
import ErrorDisplay from "../../Components/Error";

const Search = (props) => {
    const {recipes} = useContext(ReceipyContext);
    const [filteredRecipeList, setFilteredRecipeList] = useState(recipes);
    const [keyWord, setKeyWord] = useState("");
    // console.log("PROPS VALUES######################################################");
    // (props.navigation.navigate);
    const textOnChanges = (value) => {
        setKeyWord(value);
    }
    useEffect(() => {
        const filteredList = recipes?.filter(recipe => {
            return recipe?.name?.toLowerCase().includes(keyWord?.toLowerCase());
        });
        // console.log(recipes);
        setFilteredRecipeList(filteredList);
    }, [keyWord]);

    return (
        <SafeAreaView style={styles.container}>
            <Input focus textOnChange={textOnChanges}/>
            <View
                style={styles.flatListContainer}>
                <FlatList
                    ListEmptyComponent={<ErrorDisplay text="Sorry. No Data Found with this search"/>}
                    showsVerticalScrollIndicator={false}
                    horizontal={false}
                    numColumns={2}
                    data={filteredRecipeList}
                    renderItem={({item, index}) => (

                        <TouchableOpacity onPress={() => {
                            props.navigation.navigate("RecipeDetail", {item})
                        }}>
                            <Card
                                item={item}
                                style={index === 0 ? {marginLeft: 24} : {}}
                                cardImage={item?.thumbnail_url}
                                id={index}
                                title={item?.name || ""}
                                time={item?.cook_time_minutes}
                                author={{
                                    name: item?.credits?.length ? item?.credits[0]?.name : "",
                                    image: 'https://lwlies.com/wp-content/uploads/2017/04/avatar-2009.jpg'
                                }}
                            />
                        </TouchableOpacity>

                    )}
                />
            </View>

        </SafeAreaView>
    )
}
export default React.memo(Search);
