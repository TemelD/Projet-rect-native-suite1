import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Button, Text, Avatar } from "react-native-paper";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
});

export default function Home({navigation}) {
    return (
      <View style={styles.container}>
        <Text>Temel</Text>
        <Avatar.Text size={24} label="TD" />
        <Button onPress={() => navigation.navigate('Contact')}>Go to Contact</Button>
        <StatusBar style="auto" />

      </View>

      
    );
}

