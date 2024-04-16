import React from "react";
import { Text, StyleSheet, View, ScrollView } from "react-native";

export default function Item({ route, navigation }) {
  const { data, index } = route.params;

  const { breed } = data;
  const keys = Object.keys(data).filter((key) => key !== "breed");

  // Calculate total rating by summing up all property values
  const totalRating = keys.reduce((acc, key) => {
    return acc + data[key];
  }, 0);

  // Calculate average rating by dividing total rating by the number of properties
  const averageRating = totalRating / keys.length;

  // Function to generate star ratings
  const starRatings = (rating) => {
    return "⭐️".repeat(rating);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>{`${breed}`}</Text>
      <Text style={styles.label}>{averageRating.toFixed(2)} ⭐️</Text>
      <View style={styles.propertiesListContainer}>
        {keys.map((key) => (
          <View key={key} style={styles.propertiesContainer}>
            <Text style={styles.subLabel}>{`${key}:`}</Text>
            <Text style={styles.propertyValue}>{starRatings(data[key])}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // Black background
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  label: {
    fontSize: 35,
    fontWeight: "bold",
    color: "#fff", // White text color
    marginBottom: 10, // Margin below the breed label
  },
  propertiesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 5,
  },
  subLabel: {
    color: "#fff", // White text color
    fontWeight: "bold",
  },
  propertyValue: {
    color: "#ffd700", // Gold color for stars
    textAlign: "right", // Align text to the right
  },
  propertiesListContainer: {
    marginBottom: 100,
  },
});
