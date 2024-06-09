import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Image, ScrollView } from 'react-native';

export default function Main() {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [year, setYear] = useState('');
  const [section, setSection] = useState('');
  const [department, setDepartment] = useState('');
  const [email, setEmail] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Student Profile</Text>
      <Image 
        source={{ uri: 'https://via.placeholder.com/150' }} 
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Roll Number"
        value={rollNo}
        onChangeText={setRollNo}
      />
      <TextInput
        style={styles.input}
        placeholder="Year"
        value={year}
        onChangeText={setYear}
      />
      <TextInput
        style={styles.input}
        placeholder="Section"
        value={section}
        onChangeText={setSection}
      />
      <TextInput
        style={styles.input}
        placeholder="Department"
        value={department}
        onChangeText={setDepartment}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});
