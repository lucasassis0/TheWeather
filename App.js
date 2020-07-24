import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text } from 'react-native';
import Button from './src/components/Button';
import styles from './src/styles/styles';
import getData from './src/functions/getData'

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <Button
          title="Atualizar"
          onPress={() => { getData() }}
        />
      </View>
      <View style={{ flex: 2 }}>
        <Text>The Weather</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}
