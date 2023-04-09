import React from "react";
import {Image, Pressable, TextInput, View} from "react-native";
import styles from "./styles";
import colors from "../../constants/colors";

const Input = ({showSearch, textOnChange, placeholder, focus, pressable, onPress}) => {
    const renderInput = () => {
        const processTextChange = (value) => {

        }
        return (
            <View style={styles.container}>
                {
                    showSearch ? (
                        <Image source={require("../../../assets/search.png")} style={styles.searchIcon}/>
                    ) : null
                }
                <TextInput onChangeText={(value) => {
                    textOnChange(value);
                }}
                           autoFocus={focus} editable={!pressable} placeholderTextColor={colors.lightGrey}
                           style={styles.input}
                           placeholder={placeholder}
                />
            </View>
        )
    }
    if (pressable) {
        return (
            <Pressable onPress={onPress}>
                {renderInput()}
            </Pressable>
        )
    }
    // console.log(props);
    return renderInput();
}
Input.defaultProps = {
    placeholder: "Serch recipe",
    showSearch: true,
    pressable: false,
    focus: false,
    // textOnChange: () => {
    // }
};
export default React.memo(Input);
