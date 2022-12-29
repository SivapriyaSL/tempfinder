import React, {useEffect, useRef, useState} from 'react';
import {Text, View} from 'react-native';
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import { MAP_ID } from '../../../config';

const mock: any = {
  predictions: [
    {
      description: 'Sydney NSW, Australia',
      matched_substrings: [Array],
      place_id: 'ChIJP3Sa8ziYEmsRUKgyFmh9AQM',
      reference: 'ChIJP3Sa8ziYEmsRUKgyFmh9AQM',
      structured_formatting: [Object],
      terms: [Array],
      types: [Array],
    },
    {
      description: 'St Pancras Station, Euston Road, London, UK',
      matched_substrings: [Array],
      place_id: 'ChIJgaUmYzwbdkgRbOO9BBBu3TA',
      reference: 'ChIJgaUmYzwbdkgRbOO9BBBu3TA',
      structured_formatting: [Object],
      terms: [Array],
      types: [Array],
    },
    {
      description: 'San Francisco, CA, USA',
      matched_substrings: [Array],
      place_id: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
      reference: 'ChIJIQBpAG2ahYAR_6128GcTUEo',
      structured_formatting: [Object],
      terms: [Array],
      types: [Array],
    },
    {
      description: 'San Diego, CA, USA',
      matched_substrings: [Array],
      place_id: 'ChIJSx6SrQ9T2YARed8V_f0hOg0',
      reference: 'ChIJSx6SrQ9T2YARed8V_f0hOg0',
      structured_formatting: [Object],
      terms: [Array],
      types: [Array],
    },
    {
      description: 'Seattle, WA, USA',
      matched_substrings: [Array],
      place_id: 'ChIJVTPokywQkFQRmtVEaUZlJRA',
      reference: 'ChIJVTPokywQkFQRmtVEaUZlJRA',
      structured_formatting: [Object],
      terms: [Array],
      types: [Array],
    },
  ],
  status: 'OK',
};

const Search = ({setText}: any) => {
  const [selectedItem, setSelectedItem] = useState<any>('');
  const [searchtext, setTexting] = useState('');
  const [places, setPlaces] = useState([]);
  console.log('selectedItem', selectedItem);

  useEffect(() => {
    setText(selectedItem);
  }, [selectedItem, setText]);

  const fetchPlaces = (text: string) => {
    // const mapped =
    //   mock?.predictions?.length > 0
    //     ? mock?.predictions.map((each: any, index: number) => ({
    //         ...each,
    //         id: `${index + 2}`,
    //       }))
    //     : [];
    // setPlaces(mapped?.length > 0 ? mapped : []);
    // return;
    return fetch(
      `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${text}&key=${MAP_ID}`,
      {
        method: 'GET',
      },
    )
      .then(res => res.json())
      .then(json => {
        console.log('dadsdadssa', json);
        const mapped = json?.predictions?.length
          ? json?.predictions.map((each: any, index: number) => ({
              ...each,
              id: `${index + 2}`,
            }))
          : [];
        setPlaces(mapped);
      })
      .catch(error => {
        console.error(error);
      });
  };

  useEffect(() => {
    if (searchtext?.length) {
      fetchPlaces(searchtext);
    } else {
      setPlaces([]);
    }
  }, [searchtext]);
  const dropdownController = useRef(null);
  const searchRef = useRef(null);
  return (
    <View style={{flex: 1, padding: 20, margin: 30}}>
      <AutocompleteDropdown
        clearOnFocus={false}
        closeOnBlur={true}
        closeOnSubmit={false}
        onChangeText={(text: string) => {
          if (text?.length) {
            setTexting(text);
          } else {
            setTexting('');
          }
        }}
        containerStyle={{height: 500, backgroundColor: 'red'}}
        debounce={2000}
        useFilter={false}
        onClear={() => setTexting('')}
        onSelectItem={item => {
          item && setSelectedItem(item);
        }}
        renderItem={(item: any) => {
          return (
            <Text style={{color: 'blue', padding: 5}}>{item.description}</Text>
          );
        }}
        dataSet={places || []}
        textInputProps={{
          placeholder: 'Search places',
        }}
      />
    </View>
  );
};

export default Search;
