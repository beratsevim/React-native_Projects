import React from "react";
import { SafeAreaView,FlatList,View,Text,StyleSheet, ScrollView ,TextInput} from "react-native";
import Card from './components/Card';
import product_data from './product_data.json';
function App(){
  const renderProducts = ({item}) => (<Card product={item}/>);
  return(
    <SafeAreaView>
      <View style={styles.header} >
      <ScrollView showsHorizontalScrollIndicator={false}>
      <Text style={styles.headerText}>PATIKASTORE</Text>
      <TextInput style={styles.input} placeholder="ara.." />
      </ScrollView>
      </View>
      <FlatList
      data={product_data}
      renderItem={renderProducts}
      numColumns={2}
      horizontal={false}
      keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:2,
    backgroundColor: '#eceff1'
  },
  header:{
    
  },
  headerText:{
    fontWeight: 'bold',
    fontSize: 40,
    color: 'purple',
  },
  input:{
    borderRadius:5,
    borderColor: 'gray',
    borderWidth:2,
    margin:8,
    marginBottom:0,
  }
})
export default App;