import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

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
    <SafeAreaView>
      <View>
        <Text>main Screen</Text>
      </View>
    </SafeAreaView>
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
