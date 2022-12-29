import React from 'react';
import {Text, View} from 'react-native';
import {LoginType} from './type';
import styles from './style';

const Login = ({isLogin}: LoginType) => {
  return (
    <View style={{ padding: 30, margin: 30}}>
      <Text style={styles.textStyle}>sivapriyasl4300@gmail.com</Text>
    </View>
  );
};

export default Login;
