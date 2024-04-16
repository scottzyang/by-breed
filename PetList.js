import {
  StyleSheet,
  Text,
  FlatList,
  SafeAreaView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import Item from "./Item";
import { useState } from "react";
import { cats, dogs, petTypes } from "./breeds";

export default function PetList({ navigation }) {
  const [searchTerm, setSearchTerm] = useState(null);
  const [currentAnimal, setCurrentAnimal] = useState("cats");

  const searchTermUpdate = (text) => {
    setSearchTerm(text);
  };

  const searchResults = (data, searchTerm) => {
    if (!searchTerm) {
      return data;
    }
    return data.filter((item) =>
      item.breed.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  const switchAnimals = () => {
    setCurrentAnimal(currentAnimal === "cats" ? "dogs" : "cats");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.listContainer}>
        <TextInput
          style={styles.input}
          placeholder="Search Breeds, e.g. American"
          placeholderTextColor="#aaa"
          onChangeText={searchTermUpdate}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.buttonText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={switchAnimals}>
          <Text style={styles.buttonText}>{`Switch to ${
            currentAnimal === "cats" ? "Dogs 🐶" : "Cats 🐱"
          }`}</Text>
        </TouchableOpacity>
        <FlatList
          data={searchResults(
            currentAnimal === "cats" ? cats : dogs,
            searchTerm
          )}
          renderItem={({ item, index }) => <Item data={item} index={index} />}
          keyExtractor={(item, index) => index.toString()}
          style={styles.flatList}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    paddingTop: 20,
  },
  listContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  input: {
    backgroundColor: "#fff",
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ccc",
  },
  button: {
    backgroundColor: "#fff", // White button background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10, // Margin between buttons
  },
  buttonText: {
    color: "#000", // Black button text
    fontWeight: "bold",
  },
  flatList: {
    width: "100%",
  },
});
