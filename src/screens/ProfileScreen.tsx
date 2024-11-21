import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://avatars.githubusercontent.com/u/51980747?v=4' }} style={styles.profileImage} />
      <Text style={styles.title}>Profile</Text>
      <Text style={styles.label}>Name:</Text>
      <Text style={styles.value}>Ibnu Dzumirrotin</Text>

      <Text style={styles.label}>Username:</Text>
      <Text style={styles.value}>ibnu</Text>

      <Text style={styles.label}>Email:</Text>
      <Text style={styles.value}>ibnu@gmail.com</Text>

      <Text style={styles.label}>Member Since:</Text>
      <Text style={styles.value}>November 2024</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 20, 
    backgroundColor: '#fff' 
  },
  profileImage: { 
    width: 100, 
    height: 100, 
    borderRadius: 50, 
    marginBottom: 20,
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },
  title: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  label: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    marginTop: 12 
  },
  value: { 
    fontSize: 16, 
    marginTop: 4 
  },
});

export default ProfileScreen;
