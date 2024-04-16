import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, FlatList, SafeAreaView, KeyboardAvoidingView, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { cats, dogs, petTypes } from './breeds';
import { useState } from 'react';
import PetList from './PetList';

export default function App() {


  return (
    <SafeAreaView style={styles.container}>
      <PetList cats={cats} dogs={dogs}/>
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

