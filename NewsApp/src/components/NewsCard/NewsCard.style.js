import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
    container:{
        backgroundColor:'white',
        margin:10,
        borderRadius:10,
    },
    image:{
        height: Dimensions.get('window').height/4,
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
    },
    title:{
        fontSize:18,
        fontWeight:'bold',
        color:'black',
    },
    author:{
        fontStyle:'italic',
        textAlign: 'right',
        color: 'red',
        fontSize: 13,
    },
    description:{
        marginTop: 3,
    },
    inner_container:{
        padding: 5,
    },
    
})