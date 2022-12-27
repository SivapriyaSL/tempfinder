import React from 'react';
import {Text, View} from 'react-native';
import {LoginType} from './type';
import styles from './style';

const Login = ({isLogin}: LoginType) => {
  return (
    <View>
      <Text style={styles.textStyle}>{`isLogin ${
        isLogin ? 'yes' : 'no'
      }`}</Text>
    </View>
  );
};

export default Login;
