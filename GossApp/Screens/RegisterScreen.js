import { useNavigation } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { KeyboardAvoidingView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import styles from './styles';





const RegisterScreen = () => {
    const [firstName, setFirst] = useState('');
    const [lastName, setLast] = useState('');
    const [school, setSchool] = useState(''); //this one might need a dropdown but idrk

//   all need dropdowns
    const [province, setProvince] = useState('');
    const [city, setCity] = useState('');
  const [sex, setSex] = useState('');
  const [orientation, setOrientation] = useState('');

  const navigation = useNavigation();


  const data = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
    { label: 'Item 4', value: '4' },
    { label: 'Item 5', value: '5' },
    { label: 'Item 6', value: '6' },
    { label: 'Item 7', value: '7' },
    { label: 'Item 8', value: '8' },
  ];


//   const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);
//   const renderLabel = () => {
//     if (value || isFocus) {
//       return (
//         <Text style={[styles.label, isFocus && { color: 'blue' }]}>
//           Dropdown label
//         </Text>
//       );
//     }
//     return null;
//   };



  const handleCountryChange = (countryId) => {
    setSelectedCountry(countryId);
    setSelectedState(null);
    setSelectedCity(null);
  };
  
  const handleStateChange = (stateId) => {
    setSelectedState(stateId);
    setSelectedCity(null);
  };
  
  const handleCityChange = (cityId) => {
    setSelectedCity(cityId);
  };
  
  
  
  const saveProfile = () => {
    console.log('saving to profile');
  };

  return (
    <KeyboardAvoidingView style={styles.container2} behavior="padding">
        <View style={styles.container3}>
        <TextInput
          placeholder="First Name"
          value={firstName}
          onChangeText={text => setFirst(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Last Name"
          value={lastName}
          onChangeText={text => setLast(text)}
          style={styles.input}
          secureTextEntry
        />

        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select province' : '...'}
          searchPlaceholder="Search..."
          value={province}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setProvince(item.value);
            setIsFocus(false);
          }}
          //could render an icon here ig
        />
        <Dropdown
          style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
          placeholderStyle={styles.placeholderStyle}
          selectedTextStyle={styles.selectedTextStyle}
          inputSearchStyle={styles.inputSearchStyle}
          iconStyle={styles.iconStyle}
          data={data}
          search
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Select city' : '...'}
          searchPlaceholder="Search..."
          value={city}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setCity(item.value);
            setIsFocus(false);
          }}
          //could render an icon here ig
        />
        






      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={saveProfile} style={styles.button}>
          <Text style={styles.buttonText}>Save Profile</Text>
        </TouchableOpacity>
      </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;