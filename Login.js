import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');


  navigation = useNavigation();

  const handleLogin = () => {
    console.log('Logging in with:', email, password);
    if(email=='abc'){
        console.log("Logged IN")
        Alert.alert('Notice',"Login Success !",[{
            text:'Close',
            onPress: () => navigation.navigate('Main'),
        }])
        
    }

    else{
        Alert.alert('Notice',"Invalid Login !",[{
            text:'Close'
        }])
    }

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Page</Text>
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={email}
        onChangeText={setemail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
      <StatusBar style="auto" />
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
    paddingBottom:20,
  },
  input: {
    width: '100%',
    padding: 20,
  },
})

