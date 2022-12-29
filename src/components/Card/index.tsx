import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {WEATHER_ID} from '../../../config';

const CardView = ({item}: {item: any}) => {
  const [currentWeather, setWeather] = useState<any>(null);

  const fetchWeather = (place: any) => {
    if (!place?.place_id) {
      return null;
    }
    console.log(
      'dadasdsadsa',
      `https://api.openweathermap.org/data/2.5/weather?q=${place?.description.replace(
        ' ',
        '',
      )}&appid=${WEATHER_ID}`,
    );
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${place?.description}&appid=${WEATHER_ID}`,
    )
      .then(res => res.json())
      .then(json => {
        setWeather(json);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    fetchWeather(item);
  }, [item]);
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignContent: 'center',
        backgroundColor: 'blue',
        padding: 20,
        margin: 20,
        borderRadius: 20,
      }}>
      <View style={{flex: 0.4}}>
        <Text style={{textAlign: 'left', color: 'white'}}>
          {`Place: ${item?.description || ''}` || ''}
        </Text>
      </View>
      <View style={{flex: 0.6}}>
        {currentWeather ? (
          <View>
            <Text style={{textAlign: 'center', fontSize: 12, color: 'white'}}>
              {`Pressure: ${currentWeather?.main?.pressure}`},{' '}
              {`Humidity: ${currentWeather?.main?.humidity}`},{' '}
              {`Description: ${currentWeather?.weather[0]?.description}`}
            </Text>
            <Text style={{textAlign: 'center', fontSize: 32, color: 'white'}}>
              {`${(currentWeather?.main?.temp - 273.15).toFixed(0)} ℃`}
            </Text>
          </View>
        ) : (
          <Text style={{textAlign: 'center', fontSize: 32, color: 'white'}}>
            No Data found
          </Text>
        )}
      </View>
    </View>
  );
};

export default CardView;
