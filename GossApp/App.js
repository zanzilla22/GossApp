import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image, TouchableOpacity} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!  What's your opinion on minorities? </Text>
      <StatusBar style="auto" />
      <View style={{ flex: 1, backgroundColor: '#9de2ff', justifyContent: 'center', alignItems: 'center' }}>
      <View style={{backgroundColor: '#fff', borderRadius: 10, padding: 20 }}>
        <View style={{ borderRadius: 15 }}>
          <View style={{ padding: 20 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={{ uri: 'https://i.imgur.com/lyuRGpc.jpeg' }}
                style={{ width: 180, height: 180, borderRadius: 10 }}
              />
              <View style={{ marginLeft: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 5 }}>Zane Beeai</Text>
                <Text style={{ fontSize: 18, color: '#2b2a2a', marginBottom: 5 }}>St. Thomas Aquinas</Text>

                <View style={{ flexDirection: 'row', marginTop: 5 , marginBotton:20}}>
                  <TouchableOpacity style={{ flex: 1, marginRight: 10, borderWidth: 1, borderColor: 'blue', borderRadius: 10 }}>
                    <Text style={{ fontSize: 18, color: 'blue', textAlign: 'center', paddingVertical: 10 }}>Remove</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={{ flex: 1, marginLeft: 10, backgroundColor: 'blue', borderRadius: 10 }}>
                    <Text style={{ fontSize: 18, color: '#fff', textAlign: 'center', paddingVertical: 10 }}>Like</Text>
                  </TouchableOpacity>
                </View>


                <View style={{ flexDirection: 'row', backgroundColor: '#efefef', padding: 10, borderRadius: 10 }}>
                  <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, color: '#555', marginBottom: 5 }}>Articles</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>41</Text>
                  </View>
                  <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, color: '#555', marginBottom: 5 }}>Followers</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>976</Text>
                  </View>
                  <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={{ fontSize: 16, color: '#555', marginBottom: 5 }}>Rating</Text>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>8.5</Text>
                  </View>
                </View>
                
              </View>
            </View>
          </View>
        </View>
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
