import React from 'react';
import { StyleSheet, SafeAreaView, View, Text, FlatList, ScrollView, Image, Dimensions } from 'react-native';
import NewsCard from './components/NewsCard';
import Banner from './components/Banner';
import news_data from './news_data.json';

function App() {
  const renderNews = ({ item }) => <NewsCard news={item} />;
  const keyId = (item, index) => item.u_id.toString();
  const renderBanner = () => <Banner/>;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.headerText}>News</Text>
      <FlatList
        ListHeaderComponent={renderBanner}
        keyExtractor={keyId}
        data={news_data}
        renderItem={renderNews}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1'
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 50,
    color: 'black',
    textAlign: 'center',
  }
})
export default App;