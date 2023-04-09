import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        width: "90%",
        alignSelf: "center",
    },
    container: {
        width: 91,
        height: 31,
        /* Colour Styles/Primary Colour/Primary 100 */
        textAlign: "center",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginRight: 2,
        borderRadius: 10,
    },
    selectedItem: {
        backgroundColor: "#129575",
    },
    selectedText: {
        color: "#FFFFFF",
        borderBottomWidth: 2,
        borderBottomColor: "#FFFFFF",
        fontWeight: "bold"
    },
    text: {
        color: "#129575",
        textTransform: 'capitalize'
    },


});
export default styles;

/*

const tags = [
    {
        type:"meal",
        name:"drinks",
        id:64487,
        display_name:"Drinks"
    },
    {
        name:"indulgent_sweets",
        id:65850,
        display_name:"Indulgent Sweets",
        type:"occasion",
    },
    {
        display_name:"Under 30 Minutes",
        type:"difficulty",
        name:"under_30_minutes",
        id:64472
    },
    {
        display_name:"Under 45 Minutes",
        type:"difficulty",
        name:"under_45_minutes",
    },
    {
        id:8091748,
        display_name:"Under 1 Hour",
        type:"difficulty",
        name:"under_1_hour"
    }
]
 */


/// total filteredItem is 15
