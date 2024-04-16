import PetList from "./PetList";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { cats, dogs, petTypes } from "./breeds";
import Home from "./Home";
import Item from "./Item";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="PetList"
          component={PetList}
          initialParams={{
            cats: cats,
            dogs: dogs,
          }}
        />
        <Stack.Screen name="Item" component={Item} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
