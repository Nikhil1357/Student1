import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { getGrades } from './api'; // Import the getGrades function from the api.js file

export default function Grades() {
  const [grades, setGrades] = useState([]);

  useEffect(() => {
    const fetchGrades = async () => {
      try {
        const res = await getGrades();
        setGrades(res.data);
      } catch (err) {
        console.error('Error fetching grades:', err);
      }
    };

    fetchGrades();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Grades</Text>
      {grades.map((grade, index) => (
        <View key={index} style={styles.section}>
          <Text style={styles.sectionTitle}>{grade.subject}</Text>
          <Text style={styles.sectionContent}>Marks: {grade.marks}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
    color: '#462cb0', // Purple color for title
  },
  section: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#462cb0', // Light purple background
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#aa8ee6', // Purple border
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
    color: '#aa8ee6', // Purple color for section titles
  },
  sectionContent: {
    fontSize: 18,
    color: '#aa8ee6', // Slightly darker purple for content
  },
});
