import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function Item(props) {
  const { data, index } = props;
  const { breed } = data;
  const keys = Object.keys(data).filter((key) => key !== "breed");

  // Calculate total rating by summing up all property values
  const totalRating = keys.reduce((acc, key) => {
    return acc + data[key];
  }, 0);

  // Calculate average rating by dividing total rating by the number of properties
  const averageRating = totalRating / keys.length;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{`${index + 1}. ${breed}`}</Text>
      {keys.map((key) => (
        <View key={key} style={styles.propertiesContainer}>
          <Text style={styles.subLabel}>{key}:</Text>
          <Text style={styles.propertyValue}>{data[key]}</Text>
        </View>
      ))}
      <Text style={styles.averageRating}>{`Average Rating: ${averageRating.toFixed(2)}`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 1,
    backgroundColor: "gray",
  },
  label: {
    fontSize: 28,
    fontWeight: "bold",
    fontFamily: "Arial",
    color: "black",
  },
  subLabel: {
    fontSize: 18,
    marginLeft: 25,
  },
  propertiesContainer: {
    flexDirection: "row", // Arrange children horizontally
    alignItems: "center", // Center children vertically
    justifyContent: "space-between", // Distribute space evenly between children
    marginBottom: 5, // Add some space between each property
  },
  propertyValue: {
    fontSize: 18,
    marginLeft: 10,
  },
  averageRating: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10, // Add margin on top of the average rating
  },
});
