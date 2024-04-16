import { StyleSheet, Text, FlatList, SafeAreaView, KeyboardAvoidingView, TextInput, Button } from 'react-native';
import Item from './Item';
import { useState } from 'react';


export default function PetList(props) {
  const {cats, dogs} = props
  const [searchTerm, setSearchTerm] = useState(null)
  const [currentAnimal, setCurrentAnimal] = useState("cats")

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

  const switchAnimals = (currentAnimal) => {
    switch(currentAnimal) {
      case "cats":
        // code block
        setCurrentAnimal("dogs")
        console.log(currentAnimal)
        break;
      case "dogs":
        // code block
        setCurrentAnimal("cats")
        console.log(currentAnimal)
        break;
    }
  }

  return(
    <KeyboardAvoidingView style={styles.listContainer}>
      <TextInput style={styles.input} placeholder="Search Breeds, e.g. American" onChangeText={text => searchTermUpdate(text)}></TextInput>
      <Button title={`Switch to ${currentAnimal === 'cats' ? 'Dogs 🐶' : 'Cats 🐱'}`}onPress={() => switchAnimals(currentAnimal)}></Button>
      <FlatList style={styles.flatListContent}
        data={searchResults(currentAnimal === 'cats' ? cats : dogs, searchTerm)}
        renderItem={({ item, index }) => <Item data={item} index={index}/>}
        keyExtractor={(item, index) => index.toString()}
      />
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
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
