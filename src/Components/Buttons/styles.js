import {StyleSheet} from "react-native";
import colors from "../../constants/colors";

const styles = StyleSheet.create({
    container:{
    backgroundColor:colors.green,
        // flex:1,
        borderRadius:10,
        padding:15,
        width:"80%",
        alignSelf:"center",
        flexDirection:"row",
        justifyContent:"center",
        gap:5
    },

    text:{
        color:colors.white,
        fontSize:16,
        fontWeight:"500"
    },
    icon:{
        width:24,
        height:24,
    }

})
export default styles;
