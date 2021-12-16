import React, {memo} from 'react';
import {View, StyleSheet, Text} from 'react-native';

const data = ['0%', '25%', '50%', '75%', '100%'];
const data2 = ['25%', '50%', '75%', '100%'];

const Rail = ({range}) => {
  const dollars = '$';
  return (
    <View style={styles.root}>
      {range
        ? data.map(item => (
            <View style={styles.dot}>
              <Text
                style={{
                  position: 'absolute',
                  marginLeft: -3,
                  marginTop: 28,
                  width: 30,
                  zIndex: 999,
                  fontWeight: '600',
                  fontSize: 10,
                  color: 'black',
                }}>
                {item}
              </Text>
            </View>
          ))
        : data2.map((item, index) => (
            <View style={styles.dollars}>
              <Text
                style={{
                  position: 'absolute',
                  width: 45,
                  marginLeft: -5,
                  top: -50,
                  fontWeight: '600',
                  fontSize: 18,
                  color: '#3272FE',
                }}>
                {index === 0 ? dollars : dollars.repeat(index + 1)}
              </Text>
            </View>
          ))}
    </View>
  );
};

export default memo(Rail);

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 2,
    borderRadius: 2,
    backgroundColor: 'rgba(137, 146, 163, 1)',
  },
  dot: {
    width: 15,
    height: 15,
    marginLeft: -3,
    backgroundColor: 'rgba(137, 146, 163, 1)',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 50,
  },
  dollars: {
    width: '5%',
  },
});
