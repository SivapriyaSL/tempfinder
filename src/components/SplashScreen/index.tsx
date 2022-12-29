import React from 'react';
import {Text, View} from 'react-native';

import {Dimensions} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const SplashScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'orchid',
        height: windowHeight,
        width: windowWidth,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text
        style={{
          fontSize: 60,
          color: 'white',
          fontWeight: '800',
          borderColor: 'black',
        }}>
        TempFinder
      </Text>
    </View>
  );
};

export default SplashScreen;
