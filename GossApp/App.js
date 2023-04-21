import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TouchableOpacity, ScrollView, Vibration} from 'react-native';


import React, { useState } from 'react';
import { 
  TouchableOpacity, 
  StyleSheet, 
  // Vibration 
} from 'react-native';

// const LikeButton = ({ onPress }) => {
//   const [liked, setLiked] = useState(false);

//   const handlePress = () => {
//     setLiked(!liked);
//     onPress();
//     Vibration.vibrate(100); // Vibrate for 100 milliseconds
//   };

//   return (
//     <TouchableOpacity onPress={handlePress} style={styles.container}>
//       {liked ? (
//         <Image
//         source={{ uri: 'https://i.imgur.com/MgbEYie.png' }}
//         style={{ width: 160, height: 160, borderRadius: 10 }}
//       />
//       ) : (
//         <Image
//                 source={{ uri: 'https://i.imgur.com/rM2Jvyg.png' }}
//                 style={{ width: 160, height: 160, borderRadius: 10 }}
//               />
//       )}
//     </TouchableOpacity>
//   );
// };


const ProfileCard = ({ name, school, year, picture}) => {
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
                  <TouchableOpacity style={{ flex: 1, marginLeft: 10, backgroundColor: 'blue', borderRadius: 10 }}>
                    <Text style={{ fontSize: 18, color: '#fff', textAlign: 'center', paddingVertical: 10 }}>Like</Text>
                  </TouchableOpacity>
                </View>


                

                {/* <View style={{ flexDirection: 'row', backgroundColor: '#efefef', padding: 10, borderRadius: 10 }}>
                  <View style={{ flex: 1, alignItems: 'center' }}>
                  
                  </View>
                </View> */}
                
              </View>
            </View>
            <TouchableOpacity style={{marginTop:10, flex: 1, marginLeft: 10, backgroundColor: '#fc90c3', borderRadius: 10 }}>
                    <Text style={{ fontSize: 18, color: '#fff', textAlign: 'center', padding: 10 }}>Chat as Secret Admirer</Text>
                </TouchableOpacity>
          </View>
        </View>
      </View>
  )
}

export default function App() {
  const profiles = [
    { name: "Zane Beea", school: "St. Thomas Aquinas", year: "07", picture: "https://i.imgur.com/lyuRGpc.jpeg" },
    { name: "Aditya Raman", school: "University of Toronto Schools", year: "07", picture: "https://i.imgur.com/nvXkH5B.png" },
    { name: "Alice Smith", school: "Harvard University", year: "04", picture: "https://i.imgur.com/6EybQz9.jpeg" },
    { name: "John Doe", school: "MIT", year: "03", picture: "https://i.imgur.com/X6IJX5g.jpeg" }
  ];

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! What's your opinion on minorities?</Text>
      <StatusBar style="auto" />
      <View style={{ flex: 1, backgroundColor: '#d9c1cc', justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ flex: 1, overflow: 'hidden' }}>
          <ScrollView contentContainerStyle={{ paddingHorizontal: 20 }}>
            {profiles.map((profile, index) => (
              <View key={index} style={{ marginBottom: 20 }}>
                <ProfileCard name={profile.name} school={profile.school} year={profile.year} picture={profile.picture} />
              </View>
            ))} 
          </ScrollView>
        </View>
      </View>
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
