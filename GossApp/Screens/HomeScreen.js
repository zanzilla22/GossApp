import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Vibration, TextInput, KeyboardAvoidingView, Platform } from 'react-native';
import styles from './styles';
import LaurenAI from './LaurenAI';
import { useNavigation } from '@react-navigation/native';


// const navigation = useNavigation();
const LikeButton = ({ onPress }) => {
  const [liked, setLiked] = useState(false);
  

  const handlePress = () => {
    setLiked(!liked);
    onPress();
    Vibration.vibrate(30); // Vibrate f cor 100 milliseconds
  };

  return (
    <TouchableOpacity onPress={handlePress} style={styles.likeButton}>
      {liked ? (
        <Image
        source={{ uri: 'https://i.imgur.com/aISngLq.png' }}
        style={{ width: 35, height: 35}}
      />
      ) : (
        <Image
                source={{ uri: 'https://i.imgur.com/3qCp9DB.png' }}
                style={{ width: 35, height: 35 }}
              />
      )}
    </TouchableOpacity>
  );
};



const addLike = () => {
  console.log("Like added!")
}

const ProfileCard = ({ name, school, year, picture, onMessagePress}) => {
  
  return (
  <View style={{backgroundColor: '#fff', borderRadius: 30, padding: 5 }}>
        <View style={{ borderRadius: 15 }}>
          <View style={{ padding: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={{ uri: picture }}
                style={{ width: 160, height: 160, borderRadius: 10 }}
              />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 5 }}>{name}</Text>
                <Text style={{ fontSize: 18, color: '#2b2a2a', marginBottom: 5, width: 160}}>{school} - {year}</Text>

                <View style={{ flexDirection: 'row', marginTop: 5 , marginBottom:20, width: 160,}}>
                
                  <TouchableOpacity style={{ flex: 1, marginRight: 10, borderWidth: 1, borderColor: 'blue', borderRadius: 10 }}>
                    <Text style={{ fontSize: 18, color: 'blue', textAlign: 'center', paddingVertical: 10 }}>Remove</Text>
                  </TouchableOpacity>
                  <LikeButton onPress = {addLike}/>
                </View>
              </View>
            </View>
            <TouchableOpacity onPress={onMessagePress}
            style={{marginTop:10, flex: 1, marginLeft: 10, backgroundColor: '#fc90c3', borderRadius: 10 }}>
                    <Text style={{ fontSize: 18, color: '#fff', textAlign: 'center', padding: 10 }}>Chat as Secret Admirer</Text>
                </TouchableOpacity>
          </View>
        </View>
      </View>
  )
}

export default function HomeScreen() {
  const [currentView, setCurrentView] = useState('profiles');
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [messages, setMessages] = useState([]);

  const profiles = [
    { name: "Zane Beea", school: "St. Thomas Aquinas", year: "07", picture: "https://i.imgur.com/lyuRGpc.jpeg" },
    { name: "Aditya Raman", school: "University of Toronto Schools", year: "07", picture: "https://i.imgur.com/nvXkH5B.png" },
    { name: "Alice Smith", school: "Harvard University", year: "04", picture: "https://i.imgur.com/6EybQz9.jpeg" },
    { name: "John Doe", school: "MIT", year: "03", picture: "https://i.imgur.com/X6IJX5g.jpeg" }
    { name: "Lauren", school: "Goss", year: "69", picture: "temp.com" },
  ];
  
const handleProfileSelection = (profile) => {
  setSelectedProfile(profile);
  if (profile.name === 'LaurenAI') {
    setCurrentView('laurenAI');
  } else {
    setCurrentView('chat');
  }
};

if (currentView === 'laurenAI') {
  return (
    <View style={styles.container}>
      <Text>Chat with {selectedProfile.name}</Text>
      <TouchableOpacity onPress={handleBackToProfiles} style={{ marginTop: 20 }}>
        <Text>Back to profiles</Text>
      </TouchableOpacity>
      <LaurenAI />
    </View>
  );
}

const [messageInput, setMessageInput] = useState('');

const handleSendMessage = () => {
  if (messageInput.trim()) {
    setMessages([...messages, messageInput]);
    setMessageInput('');
  }
};

const handleBackToProfiles = () => {
  setCurrentView('profiles');
};
const navigation = useNavigation();
const editProfile = () => {
  navigation.replace('Register');
}
if (currentView === 'profiles') {
  return (
    <View style={styles.container4}>
      <Text>Open up App.js to start working on your app! What's your opinion on minorities?</Text>
      <StatusBar style="auto" />
      

      <View style={{ flex: 1, backgroundColor: '#d9c1cc', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flex: 1, overflow: 'hidden' }}>
          <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
          <TouchableOpacity onPress={editProfile}
            style={{marginTop:10,marginBottom: 10, flex: 1, marginLeft: 10, backgroundColor: '#fc90c3', borderRadius: 10 }}>
                    <Text style={{ fontSize: 18, color: '#fff', textAlign: 'center', padding: 10 }}>Edit Your Profile</Text>
                </TouchableOpacity>
            {profiles.map((profile, index) => (
              <View key={index} style={{ marginBottom: 20 }}>
                <ProfileCard
                  name={profile.name}
                  school={profile.school}
                  year={profile.year}
                  picture={profile.picture}
                  onMessagePress={() => handleProfileSelection(profile)}
                />
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </View>
  );
} else if (currentView === 'chat') {
  return (
    <View style={styles.container}>
      <Text>Chat with {selectedProfile.name}</Text>
      <TouchableOpacity onPress={handleBackToProfiles} style={{ marginTop: 20 }}>
        <Text>Back to profiles</Text>
      </TouchableOpacity>
      <ScrollView style={styles.chatContainer}>
        {messages.map((message, index) => (
          <Text key={index}>{message}</Text>
        ))}
      </ScrollView>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.chatInputContainer}
      >
        <TextInput
          style={styles.chatInput}
          placeholder="Type your message"
          value={messageInput}
          onChangeText={setMessageInput}
        />
        <TouchableOpacity onPress={handleSendMessage} style={styles.sendButton}>
          <Text>Send</Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </View>
  );
}
}
