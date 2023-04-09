import 'react-native-gesture-handler';
import {Image, Pressable, SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createContext, useEffect, useState} from "react";
import Splash from "./src/Screens/Splash";
import Home from "./src/Screens/Home";
import Search from "./src/Screens/Search";
import {getRecipesList} from "./src/http";
import RecipeDetail from "./src/Screens/RecipeDetail";

export const ReceipyContext = createContext();
export const HealthyRecipeContext = createContext();


export default function App() {
    const [recipes, setRecipes] = useState();
    const [healthyRecipe, setHealthyRecipe] = useState();
    const Stack = createStackNavigator();
    const recipesFetch = async (tags, size) => {
        try {
            const response = await getRecipesList(tags, size);
            return response.data.results;
        } catch (e) {
            console.error("Error", e);
        }
    }

    useEffect(() => {
        (async () => {
            const recipeRec = await recipesFetch(null, 15);
            setRecipes(recipeRec);
            const healthyRec = await recipesFetch("healthy", "10");
            setHealthyRecipe(healthyRec);
        })();
    }, []);
    const BackBtn = (props) => {
        return (
            <Pressable onPress={props.onPress}>
                <Image source={require('./assets/back.png')} style={styles.backBtn}/>
            </Pressable>
        )
    }
    return (
        <HealthyRecipeContext.Provider value={{healthyRecipe, setHealthyRecipe}}>
            <ReceipyContext.Provider value={{recipes, setRecipes}}>
                <SafeAreaView style={styles.container}>
                    <NavigationContainer>
                        <Stack.Navigator
                            screenOptions={{headerShown: true, headerShadowVisible: false, headerTitleAlign: "center"}}>
                            <Stack.Screen options={{headerShown: false}} name="Splash" component={Splash}/>
                            <Stack.Screen name="Home" component={Home}
                                          options={{headerLeft: null, gestureEnabled: false}}/>
                            <Stack.Screen name="Search" component={Search}
                                          options={{
                                              headerLeft: (props) => <BackBtn {...props}/>
                                          }}/>
                            <Stack.Screen name="RecipeDetail" options={{
                                headerLeft: (props) =>
                                    <BackBtn {...props}/>, title: ""

                            }} component={RecipeDetail}/>

                        </Stack.Navigator>
                    </NavigationContainer>
                </SafeAreaView>
            </ReceipyContext.Provider>
        </HealthyRecipeContext.Provider>
    );
}

const styles = StyleSheet.create({
    backBtn: {
        width: 24,
        height: 24,
        margin: 16
    },
    container: {
        flex: 1,
        // backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
