import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View, Alert} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import styles from './styles';
// import firebase from '../firebase';
import { auth } from '../firebase';
import * as allFB from '../firebase';
import firestore from '@react-native-firebase/firestore'
import firebase from '@react-native-firebase/app';
// import '../firebase/firestore';
import {showImagePicker} from 'react-native-image-picker';


const RegisterScreen = () => {
  const [firstName, setFirst] = useState('');
  const [lastName, setLast] = useState('');
  const [description, setDescription] = useState('');
  const [school, setSchool] = useState('');
  const [sex, setSex] = useState('');
  const [orientation, setOrientation] = useState('');
  const [image, setImage] = useState(null);

  const sexList = [
    { label: 'Male', value: 'Male' },
    { label: 'Female', value: 'Female' },
    { label: 'Other', value: 'Other' },
];
const orientationList = [
    {label: 'Straight', value: 'Straight'},
    {label: 'Gay', value: 'Gay'},
    {label: 'Lesbian', value: 'Lesbian'},
    {label: 'Other', value: 'Other'},
]

  const [isFocus, setIsFocus] = useState(false);

  const navigation = useNavigation();

  docTest =  async () => {
    return await firestore().collection("users").doc("FjZcjRx44U3aEPcz2cjN").get();
  }
  // const userDocument = 

  // const firebaseConfig = {
  //   apiKey: "AIzaSyDHubzwCEOmO7DmkBuvCqF7GTj24sBYvNA",
  //   authDomain: "goss-ee6e6.firebaseapp.com",
  //   projectId: "goss-ee6e6",
  //   storageBucket: "goss-ee6e6.appspot.com",
  //   messagingSenderId: "1019879370842",
  //   appId: "1:1019879370842:web:ce18b3a9d012a85ccf2863",
  //   measurementId: "G-XXW9LV5F59"
  // };
  
  // firebase.initializeApp(firebaseConfig);
  
  // const firestore = firebase.firestore();




  const user = auth.currentUser;
  console.log(user);
  console.log(allFB);
  console.log(docTest());
  console.log(firebase);

  // useEffect(() => {
  //   if (user) {
  //     const db = firebase.firestore();

  //     db.collection('users').doc(user.uid).get()
  //       .then((doc) => {
  //         if (doc.exists) {
  //           const data = doc.data();
  //           setFirst(data.firstName || '');
  //           setLast(data.lastName || '');
  //           setDescription(data.description || '');
  //           setSchool(data.school || '');
  //           setSex(data.sex || '');
  //           setOrientation(data.orientation || '');
  //         }
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching user data: ', error);
  //       });
  //   }
  // }, [user]);

  const chooseImage = () => {
    showImagePicker({}, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setImage(response.uri);
      }
    });
  };
  const saveProfile = () => {
    if(firstName && lastName && description && school && sex && orientation) {
      console.log('saving to profile');
      const db = firebase.firestore();

      db.collection('users').doc(user.uid).set({
        firstName,
        lastName,
        description,
        school,
        sex,
        orientation,
      })
      .then(() => {
        console.log('Profile saved successfully!');
        navigation.replace('Home');
      })
      .catch((error) => {
        console.error('Error saving profile: ', error);
        Alert.alert('Error saving profile: ', error);
      });
    } else {
      Alert.alert('Error', "All fields must be filled in.", [{ text: 'OK' }]);
    }
  };
  
  return (
    <KeyboardAvoidingView style={styles.container2} behavior="padding">
      <View style={styles.container3}>
        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={(text) => setFirst(text)}
          style={styles.input2}
        />
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={(text) => setLast(text)}
          style={styles.input2}
        />
        <TextInput
          placeholder="Description"
          value={description}
          onChangeText={(text) => setDescription(text)}
          style={styles.input2}
        />
        <TextInput
          placeholder="School"
          value={school}
          onChangeText={(text) => setSchool(text)}
          style={styles.input2}
        />
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={sexList}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select sex' : '...'}
          searchPlaceholder="Search..."
          value={sex}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setSex(item.value);
            setIsFocus(false);
          }}
        />
        
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={orientationList}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select orientation' : '...'}
          searchPlaceholder="Search..."
          value={orientation}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setOrientation(item.value);
            setIsFocus(false);
          }}
        />
  
        <TouchableOpacity style={styles.button} onPress={saveProfile}>
          <Text style={styles.buttonText}>Save Profile</Text>
        </TouchableOpacity>
      </View>
      <Text onPress={chooseImage}>Choose Profile Image</Text>

{image && <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />}
    </KeyboardAvoidingView>
  );
  
};

export default RegisterScreen;
