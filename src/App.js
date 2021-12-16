import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import RangeSlider from './RangeSlider';

const App = () => {
  const [persangete, setPersantage] = useState(0);
  return (
    <View style={styles.container}>
      <View style={{paddingVertical: 50}}>
        <RangeSlider floatingLabel setPersantage={setPersantage} />
        <Text style={{marginTop: 50}}>{persangete}</Text>
      </View>
      <View style={{paddingVertical: 50}}>
        <RangeSlider range setPersantage={setPersantage} />
        <Text style={{marginTop: 50}}>{persangete}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
  },
});

export default App;
