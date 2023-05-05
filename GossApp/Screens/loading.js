// there is no way zane has a girlfriend im in denial - aditya raman 05/05/2023
import React from 'react';
import { View, ActivityIndicator, Stylesheet } from 'react-native';

const LoadingScreen = () => {
  return (
     <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
});

export default LoadingScreen;
