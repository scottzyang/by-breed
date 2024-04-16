import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function Home() {
  return(
    <View style={styles.container}>
      <Text>Hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 1,
    backgroundColor: "red"
  },
})
