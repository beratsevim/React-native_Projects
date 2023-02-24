import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
  container:{
    backgroundColor:'#eeeeee',
    borderRadius:5,
    margin:10,
    flex:1,
  },
  body:{
    padding:5,
    flex:1,
  },
  title:{
    color: 'black',
    fontSize:20,
    fontWeight:'bold',
  },
  price:{
    fontWeight:"bold",
    fontSize:18,
    marginTop:3,
  },
  image:{
    height: Dimensions.get('window').height/4,
    width: '100%',
    borderRadius:5,
    resizeMode:'contain',
  },
  instock:{
    textAlign:'right',
    color:'red',
    fontSize:20,
    fontWeight:'bold',
    marginTop:3,
  },
})