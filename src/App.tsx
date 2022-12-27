import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './feature/Login';

const Stack = createNativeStackNavigator();

const App = () => {
  const [showSplashScreen, setSplasshScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setSplasshScreen(false);
    }, 4000);
  }, []);

  if (showSplashScreen) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.textStyle}>Temp Finder</Text>
      </SafeAreaView>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Login} />
        <Stack.Screen name="lome" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: 'blue',
    fontSize: 20,
  },
  container: {
    display: 'flex',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
