import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert, ScrollView } from 'react-native';

export default function Attendance() {
  const [isSessionActive, setIsSessionActive] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(0);
  const [attendanceMarked, setAttendanceMarked] = useState(false);

  useEffect(() => {
    let timer;
    if (isSessionActive && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
    } else if (timeRemaining === 0) {
      setIsSessionActive(false);
    }
    return () => clearInterval(timer);
  }, [isSessionActive, timeRemaining]);

  const startAttendanceSession = () => {
    setIsSessionActive(true);
    setTimeRemaining(120); // 2 minutes
    setAttendanceMarked(false);
  };

  const markAttendance = () => {
    if (isSessionActive) {
      setAttendanceMarked(true);
      Alert.alert('Attendance marked successfully');
    } else {
      Alert.alert('Attendance session is not active');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Attendance</Text>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Student Profile</Text>
        <Text style={styles.sectionContent}>Name: John Doe</Text>
        <Text style={styles.sectionContent}>Roll Number: 12345</Text>
        <Text style={styles.sectionContent}>Year: Sophomore</Text>
        <Text style={styles.sectionContent}>Section: A</Text>
        <Text style={styles.sectionContent}>Department: Computer Science</Text>
        <Text style={styles.sectionContent}>Email: john.doe@example.com</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Attendance</Text>
        <Text style={styles.sectionContent}>Total Attendance: 85%</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mark Attendance</Text>
        <Button title="Start Attendance Session" onPress={startAttendanceSession} />
        {isSessionActive && (
          <Text style={styles.timer}>Time Remaining: {timeRemaining} seconds</Text>
        )}
        <Button title="Mark Attendance" onPress={markAttendance} disabled={!isSessionActive || attendanceMarked} />
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
  timer: {
    fontSize: 16,
    color: 'red',
    marginVertical: 10,
    textAlign: 'center',
  },
});
