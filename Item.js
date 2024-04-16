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

  // Function to generate star ratings
  const starRatings = (rating) => {
    return "⭐️".repeat(rating);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{`${index + 1}. ${breed}`}</Text>
      {keys.map((key) => (
        <View key={key} style={styles.propertiesContainer}>
          <Text style={styles.subLabel}>{`${key}:`}</Text>
          <Text style={styles.propertyValue}>{starRatings(data[key])}</Text>
        </View>
      ))}
      <Text
        style={styles.averageRating}
      >{`Average Rating: ${averageRating.toFixed(2)} ⭐️`}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#333",
    borderRadius: 5,
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#fff",
  },
  propertiesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 5,
  },
  subLabel: {
    color: "#fff",
    flexShrink: 1,
    maxWidth: "50%",
    flexWrap: "wrap",
  },
  propertyValue: {
    color: "#ffd700",
    fontWeight: "bold",
    textAlign: "right",
    flexShrink: 1,
  },
  averageRating: {
    fontSize: 14,
    color: "#fff",
    marginTop: 5,
  },
});
