import React from "react";
import {Image, ImageBackground, Platform, SafeAreaView, Text, View} from "react-native";
import styles from "./styles";
import Button from "../../Components/Buttons";

const Splash = (props) => {
    const deviceType = Platform.OS;
    return (
        <SafeAreaView style={styles.container}>
            <ImageBackground style={styles.imgBg} source={require('../../../assets/splash.png')}>

                <View style={{flex: 1, marginTop: deviceType === "android" ? 22 : 5}}>
                    <Image style={styles.logo} source={require('../../../assets/logo.png')}/>
                    <Text style={styles.title}>100k+ Premium Recipe</Text>
                </View>
                <View>
                    <View style={styles.subContainer}>
                        <Text style={styles.text}>
                            {`${"Get"}\nCooking`}
                        </Text>
                        <Text style={styles.subText}>
                            Simple way to find Tasty Recipe
                        </Text>
                    </View>
                    <Button onPress={() => {
                        props.navigation.navigate("Home")
                    }}>
                        Start Cooking
                    </Button>
                </View>
            </ImageBackground>

        </SafeAreaView>
    )
}
export default React.memo(Splash);
