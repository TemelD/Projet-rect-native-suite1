import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { Avatar } from 'react-native-paper';
import Home from './screens/Home';
import Contact from './screens/Contact';


const Stack = createNativeStackNavigator();

export default function Main() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
      </NavigationContainer>
    );
  }

