import React, {useContext, useEffect, useState} from "react";
import {FlatList, SafeAreaView, ScrollView, TouchableOpacity, View} from "react-native";
import styles from "./styles";
import Input from "../../Components/Input";
import Title from "../../Components/Title";
import RecipeCard from "../../Components/RecipeCard";
import CategoryList from "../../Components/CategoryList";
import Card from "../../Components/Card";
import {HealthyRecipeContext, ReceipyContext} from "../../../App";
import ErrorDisplay from "../../Components/Error";


const Home = (props) => {
    const {recipes} = useContext(ReceipyContext);
    const {healthyRecipe} = useContext(HealthyRecipeContext);
    const [selectedValue, setSelectedValue] = useState("All");
    const [catList, setCatList] = useState([]);
    const [filteredList, setFilteredList] = useState(recipes)
    // const catList = ["All", "Trending", "Seasonal", "Chocoholic", "Daily", "1 All", "1 Trending", "1 Seasonal", "1 Chocoholic", "1 Daily", "2 All", "2 Trending", "2 Seasonal", "2 Chocoholic", "2 Daily"];


    useEffect(() => {
        const tags = [];
        recipes?.forEach(recipe => {
            recipe?.tags?.forEach(tag => {
                const currentTag = tag.name.replaceAll("_", " ");
                if (!tags.includes(currentTag)) {
                    tags.push(currentTag);
                }
            });
            // setSelectedValue(tags[]);
            setCatList(["All", ...tags])
        })
    }, [recipes]);

    useEffect(() => {
        const searchValue = selectedValue.split(" ").join("_");
        if (searchValue === 'All') {
            setFilteredList(recipes);
        } else {
            const filteredRecipeValues = [];
            recipes?.forEach(item => {
                const f = item.tags.filter((e) => {
                    if (e.name === searchValue) {
                        filteredRecipeValues.push(item);
                    }
                })
            })
            setFilteredList(filteredRecipeValues);
        }
    }, [selectedValue])


    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Input onPress={() => {
                    props.navigation.navigate("Search");
                }} pressable={true}/>
                <ScrollView>
                    <Title title="Healthy Recipes"/>

                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={healthyRecipe}
                        renderItem={({item}) => {
                            return (
                                <RecipeCard navigation={props.navigation} ReceipDetail={item}/>
                            )
                        }}/>

                    <CategoryList
                        onChangeSelectedValue={setSelectedValue} selectedItem={selectedValue}
                        catList={catList}/>
                    <FlatList
                        horizontal
                        data={filteredList}
                        ListEmptyComponent={<ErrorDisplay text="Sorry No data in this category."/>}
                        style={{marginLeft: 20, marginRight: 20,}}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item, index}) => (
                            <TouchableOpacity onPress={() => {
                                props.navigation.navigate("RecipeDetail", {item})
                            }}>
                                <Card
                                    style={index === 0 ? {marginLeft: 24} : {}}
                                    cardImage={item?.thumbnail_url}
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
                </ScrollView>

            </View>
        </SafeAreaView>
    )
}
export default React.memo(Home);
