import * as React from 'react';
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { Avatar } from 'react-native-paper';

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
});

export default function Contact() {
    return (
      <View style={styles.container}>
        <Text>Gaspar</Text>
        <Avatar.Text size={24} label="TD" />
        <StatusBar style="auto" />
      </View>

      
    );
}
