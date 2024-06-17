import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { login } from './api';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
  const [email, setEmail] = useState('test@example.com'); // Default email for testing
  const [password, setPassword] = useState('password123'); // Default password for testing
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      console.log('Logging in with:', email, password); // Log email and password
      const res = await login(email, password);
      console.log('Login response:', res); // Log the response from the API
      if (res.token) {
        await AsyncStorage.setItem('userToken', res.token);
        console.log('Login successful. Token saved:', res.token); // Log the saved token
        Alert.alert('Notice', 'Login Successful!', [{
          text: 'Close',
          onPress: () => navigation.navigate('Main'),
        }]);
      } else {
        Alert.alert('Notice', 'Invalid Login!', [{ text: 'Close' }]);
      }
    } catch (err) {
      console.error('Login error:', err.response || err.message);
      Alert.alert('Notice', 'Login Failed!', [{ text: 'Close' }]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <Button
        title="Login"
        onPress={handleLogin}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#462cb0', // Changed background color
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff', // Changed text color to white
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff', // Changed input background color to white
  },
});