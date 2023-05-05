// Import necessary React and React Native components
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView } from 'react-native';
import styles from './styles';
import 'react-native-url-polyfill/auto'; 
import axios from 'axios';

const LaurenAI = () => {
  const [messages, setMessages] = useState([]); 
  const [inputText, setInputText] = useState(''); 

  const apiKey = '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'; // OpenAI API key like ava has the key to my heart 
  const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions'; // OpenAI API URL like urlove for me doesnt exist ava


  const handleSendMessage = async () => {
    if (inputText === '') {
      return;
    }

    setMessages((prevMessages) => [...prevMessages, { text: inputText, sender: 'user' }]);
    setInputText(''); 

    try {
      const response = await axios.post(
        apiUrl,
        {
          prompt: `LaurenAI: ${inputText}\nUser: `,
          max_tokens: 64, 
          n: 1, 
          stop: null, 
          temperature: 1, 
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`, 
          },
        }
      );

      const botResponse = response.data.choices[0].text.trim();
      // Add the bot's response to the messages array
      setMessages((prevMessages) => [...prevMessages, { text: botResponse, sender: 'Lauren' }]);
    } catch (error) {
      console.error('Lauren has left you on read.', error);
    }
  };
