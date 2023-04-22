import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Linking } from 'react-native';
import styles from './styles';

const extensions = [
  {
    id: 'dev1.0',
    name: 'Developer Portal',
    description: 'Have you ever wanted a more collaborative environment to develop with your colleagues? Look no further.',
    downloadUrl: 'https://numberonenation.com',
  },
  {
    id: 'rel1.0',
    name: 'Relationship',
    description: 'Are you lonely? Or perhaps you just want to make new friends? Look no further download the Relationship extension and meet new people safely.',
    // the are you lonely felt targetted - aditya raman 04/21/2023
    // it did indeed - zane beeai 04/22/2023
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

export default ExtensionsScreen;
