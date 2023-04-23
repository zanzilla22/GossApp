import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity} from 'react-native';
import styles, { input } from './styles'
import 'react-native-url-polyfill/auto';
import axios from 'axios'

const LaurenAI = () => {
  const [messages, setMessages] = useState([]);
//   const [data, setData] = useState([]);
  const [inputText, setInputText] = useState('');

  const apiKey = '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';
  const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-002/completions'
const handleSendMessage = async () => {
    if (inputText === '') {
      return;
    }
  
    setMessages([...messages, { text: inputText, isUser: true }]);
    setInputText('');
  
    // const response = "heyyyyyyy....";
    const response = await axios.post(apiUrl, {
        model: "gpt-3.5-turbo",
        prompt: inputText,
        temperature: 1,
        top_p: 1,
        n: 1,
        stream: false,
        max_tokens: 250,
        presence_penalty: 0,
        frequency_penalty: 0
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'Authorization': `Bearer ${apiKey}`
            },
            body: {}
        });
    console.log("resposne: ")
    console.log(response);
    const messageText = response.data.choices[0].text;
    setMessages([...messages, { text: messageText, isUser: false }]);
  };
  
  return (
    <View style={styles.container4}>
      <View style={styles.messageList}>
        {messages.map((message, index) => (
          <View key={index} style={message.isUser ? styles.userMessage : styles.chatGPTMessage}>
            <Text>{message.text}</Text>
          </View>
        ))}
      </View>
      <View style={styles.inputContainer4}>
        <TextInput
          style={styles.input}
          placeholder="Type your message here"
          value={inputText}
          onChangeText={setInputText}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LaurenAI;
