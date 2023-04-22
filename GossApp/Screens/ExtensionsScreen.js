import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Linking } from 'react-native';

const extensions = [
  {
    id: 'dev1.0',
    name: 'Developer Portal',
    description: 'Have you ever wanted a more collaborative environment to develop with your colleagues? Look no further.',
    downloadUrl: 'https://numberonenation.com',
  },
  {
    id: '2',
    name: 'Relationship',
    description: 'Are you lonely? Or perhaps you just want to make new friends? Look no further download the Relationship extension and meet new people safely.',
    // the are you lonely felt targetted - aditya raman 04/21/2023
    downloadUrl: 'https://numberonenation.com',
  },
  // Add more extensions here
];

const ExtensionItem = ({ extension }) => {
  const { name, description, downloadUrl } = extension;

  const handleDownload = () => {
    Linking.openURL(downloadUrl);
  };

  return (
    <View style={styles.extensionItem}>
      <Text style={styles.extensionName}>{name}</Text>
      <Text style={styles.extensionDescription}>{description}</Text>
      <TouchableOpacity style={styles.downloadButton} onPress={handleDownload}>
        <Text style={styles.downloadButtonText}>Download</Text>
      </TouchableOpacity>
    </View>
  );
};

const ExtensionsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Available Extensions</Text>
      <FlatList
        data={extensions}
        renderItem={({ item }) => <ExtensionItem extension={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  extensionItem: {
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
  },
  extensionName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  extensionDescription: {
    fontSize: 14,
    marginBottom: 8,
  },
  downloadButton: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  downloadButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
});

export default ExtensionsScreen;
