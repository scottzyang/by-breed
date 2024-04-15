import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, FlatList, SafeAreaView, KeyboardAvoidingView, TextInput } from 'react-native';
import { cats, dogs, petTypes } from './breeds';
import Item from './Item';
import { useState } from 'react';

export default function App() {
  const [searchTerm, setSearchTerm] = useState(null)

  const searchTermUpdate = (text) => {
    console.log("updating search term")
    setSearchTerm(text)
  }

  const searchResults = (data, searchTerm) => {
    console.log("Outputting search results")
    if (!searchTerm) {
      return data
    }
    // filter data based on search term
    const searchResults = data.filter((item) => {
      return item.breed.toLowerCase().includes(searchTerm.toLowerCase())
    })
    if (searchResults.length > 0) {
      return searchResults
    }
  }

  console.log(searchResults(cats, "abyss"))

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.listContainer}>
      <TextInput style={styles.input} placeholder="Search Breeds, i.e American" onChangeText={text => searchTermUpdate(text)}></TextInput>
        <FlatList style={styles.flatListContent}
          data={searchResults(cats, searchTerm)}
          renderItem={({ item, index }) => <Item data={item} index={index}/>}
          keyExtractor={(item, index) => index.toString()}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  flatListContent: {
    width: '100%',
  },
  input: {
    backgroundColor: '#fff',
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    marginTop: 0, // Add top margin to adjust position
  },
});

