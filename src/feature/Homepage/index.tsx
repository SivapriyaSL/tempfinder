import React, {useState} from 'react';
import {View} from 'react-native';
import CardView from '../../components/Card';
// import MapView from '../../components/Map';
import Search from '../../components/Search';

const Homepage = () => {
  const [text, setText] = useState<string>('inital');
  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <View style={{flex: 0.5, backgroundColor: 'white'}}>
        <Search setText={setText} />
      </View>
      {/* <View style={{flex: 0.6, backgroundColor: 'red'}}>
        <MapView />
      </View> */}
      <View style={{flex: 0.5, backgroundColor: 'white'}}>
        <CardView item={text} />
      </View>
    </View>
  );
};

export default Homepage;
