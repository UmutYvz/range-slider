import React, {memo} from 'react';
import {View, StyleSheet} from 'react-native';

const Notch = props => {
  return <View style={styles.root} {...props} />;
};

export default memo(Notch);

const styles = StyleSheet.create({
  root: {
    width: 8,
    height: 8,
    borderLeftColor: 'red',
    borderRightColor: 'red',
    borderTopColor: 'red',
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 8,
  },
});
