import React, {memo} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import ShadowView from 'react-native-simple-shadow-view';
const THUMB_RADIUS = 12;

const Thumb = () => {
  return (
    <ShadowView
      style={{
        height: 32,
        width: 32,
        borderRadius: 32 / 2,
        backgroundColor: '#3272FE',
        shadowColor: '#3272FE',
        shadowOffset: {
          width: 0,
          height: 10,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../../../move.png')}
        style={{
          width: 32 - 8,
          height: 32 - 8,
        }}
      />
    </ShadowView>
  );
};

export default memo(Thumb);
