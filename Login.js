import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { login } from './api'; // Import the login function from the api.js file

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const handleLogin = async () => {
    try {
      const res = await login(email, password);
      if (res.data.token) {
        // Save token (you might want to use AsyncStorage or Context API here)
        console.log('Login successful:', res.data.token);
        Alert.alert('Notice', 'Login Success!', [{
          text: 'Close',
          onPress: () => navigation.navigate('Main'),
        }]);
      } else {
        Alert.alert('Notice', 'Invalid Login!', [{ text: 'Close' }]);
      }
    } catch (err) {
      console.error('Login error:', err);
      Alert.alert('Notice', 'Login Failed!', [{ text: 'Close' }]);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    paddingBottom: 20,
  },
  input: {
    width: '100%',
    padding: 20,
  },
});
