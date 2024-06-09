import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Announcements() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Announcements</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Time Table</Text>
        <Text style={styles.sectionContent}>Here is the time table...</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Holidays</Text>
        <Text style={styles.sectionContent}>List of upcoming holidays...</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Assignments</Text>
        <Text style={styles.sectionContent}>Details about current assignments...</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Notes</Text>
        <Text style={styles.sectionContent}>Class notes and materials...</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Messages</Text>
        <Text style={styles.sectionContent}>Important messages and notifications...</Text>
      </View>
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
  },
  section: {
    marginBottom: 20,
    padding: 16,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  sectionTitle: {
    fontSize: 20,
    marginBottom: 10,
  },
  sectionContent: {
    fontSize: 16,
  },
});
