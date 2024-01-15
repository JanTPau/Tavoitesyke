import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [result, setResult] = useState('');

  const calculateHeartRate = () => {
    const ageValue = parseInt(age);

    if (isNaN(ageValue) || ageValue <= 0) {
      alert('Please enter a valid age.');
      return;
    }

    const lowerLimit = Math.round((220 - ageValue) * 0.65);
    const upperLimit = Math.round((220 - ageValue) * 0.85);

    setResult(`Heart Rate Limits: ${lowerLimit} - ${upperLimit} bpm`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Heart Rate Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter your age"
        keyboardType="numeric"
        value={age}
        onChangeText={(text) => setAge(text)}
      />
      <Button title="Calculate" onPress={calculateHeartRate} />
      <Text style={styles.result}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    width: '100%',
    marginBottom: 16,
    paddingLeft: 8,
  },
  result: {
    marginTop: 20,
    fontWeight: 'bold',
  },
});
