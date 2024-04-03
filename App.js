import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, ScrollView, SafeAreaView } from 'react-native';
import { cats, dogs, petTypes } from './breeds';
import Item from './Item';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList style={styles.flatListContent}
          data={cats}
          renderItem={({ item, index }) => <Item data={item} index={index}/>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flatListContent: {
    width: '100%',
  }
});
