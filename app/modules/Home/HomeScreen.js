import React from 'react';
import { Text, View } from 'react-native';

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
      }}>
      <Text style={{ color: 'black' }}>
        This is demo of default dark/light theme using navigation.
      </Text>
    </View>
  );
};

export default HomeScreen;
